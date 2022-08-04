import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const Todo = ({ todos, completeTodo, removeTodo }) => {

    return todos.map((todo, index) => (
        <div
            className={'todo-row'}
            key={index}
        >
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.isComplete ? <span>{todo.text}(completed)</span> : `${todo.text}`}
            </div>
            <div className='icons'>
                <AiOutlineClose
                    onClick={() => removeTodo(todo.id)}
                    className='delete-icon'
                />
            </div>
        </div>
    ));
};

export default Todo;