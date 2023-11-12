import React from 'react'
import "./Todo.css"
import { Icon } from '@iconify/react'

function Todo({ todos, handleDelete, handleDone, handleClickupdate }) {


    return (
        <div className='todo-card'>
            {
                todos.length === 0 ?
                    (
                        <div>No to-do items have been entered</div>
                    ) :

                    todos.map((todo) => (
                        <div key={todo.id} className='todo-contain'>
                            <div className='left'>
                                <div onClick={() => handleDone(todo.id)} className={todo.isDone === true ? "complated" : ""}>{todo.head}</div>
                            </div>
                            <div className='right'>
                                <Icon onClick={() => handleClickupdate(todo.id)} className='icon' icon="iconamoon:edit-light"></Icon>
                                <Icon onClick={() => handleDelete(todo.id)} className='icon' icon="mi:delete"></Icon>
                            </div>
                        </div>
                    ))


            }
        </div>
    )
}

export default Todo