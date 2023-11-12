// Update.js
import { Icon } from '@iconify/react';
import React from 'react';

function Update({ setUpdated, selectedTodo, setSelectedTodo, setTodos, todos }) {
    const handleChange = (e) => {
        setSelectedTodo({
            ...selectedTodo,
            head: e.target.value,
        });
    };

    const handleUpdate = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === selectedTodo.id ? { ...selectedTodo } : todo
            )
        );

        setUpdated(false);
        setSelectedTodo('');
    };

    return (
        <div className='input-area update-area'>
            <div className='close-area'>
                <Icon onClick={() => setUpdated(false)} className='close' icon='material-symbols:close'></Icon>
            </div>
            <div className='update'>
                <input className='input' type='text' value={selectedTodo.head} onChange={handleChange} />
                <button onClick={handleUpdate} className='button'>
                    Update
                </button>
            </div>
        </div>
    );
}

export default Update;
