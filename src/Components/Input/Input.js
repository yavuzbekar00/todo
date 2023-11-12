import React from 'react';
import "./Input.css";

function Input({ value, setValue, addTodo }) {

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            addTodo(value)
        }
    }

    return (
        <div className='input-area'>
            <input
                className='input'
                type='text'
                placeholder='Please enter a to do'
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKey}
            />
            <button disabled={value === ""} onClick={() => addTodo(value)} className='button'>Add</button>
        </div>
    );
}

export default Input;
