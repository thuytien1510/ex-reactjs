import React, { useState, useEffect, useRef } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };

    return (
        <form onSubmit={handleSubmit} className='todo-form'>
            {
                <div className='add-input'>
                    <input
                        placeholder='Input to do'
                        value={input}
                        onChange={handleChange}
                        name='text'
                        className='todo-input'
                        ref={inputRef}
                    />
                    <div >
                        <AiOutlinePlusCircle
                            onClick={handleSubmit}
                            className='add-icon'
                        />
                    </div>
                </div>
            }
        </form>
    );
}

export default TodoForm;