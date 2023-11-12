// App.js
import React, { useState } from 'react';
import './App.css';
import Head from './Components/Head/Head.js';
import Input from './Components/Input/Input';
import Todo from './Components/Todo/Todo';
import Update from './Components/Update/Update';

function App() {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [updated, setUpdated] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState('');

  const updateValue = (id) => {
    setSelectedTodo(todos.find((todo) => todo.id === id));
  };

  const handleUpdateOpen = (id) => {
    setUpdated(true);
    updateValue(id);
  };

  const addTodo = (value) => {
    const newTodo = {
      id: todos.length + 1,
      head: value,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
    setValue('');
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDone = (id) => {
    setTodos((todos) => {
      return todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        }
        return todo;
      });
    });
  };

  return (
    <div className="App">
      <Head />
      <Input value={value} setValue={setValue} addTodo={addTodo} todos={todos} />
      {updated && <Update setTodos={setTodos} setSelectedTodo={setSelectedTodo} selectedTodo={selectedTodo} setUpdated={setUpdated} />}
      <Todo setUpdated={setUpdated} handleClickupdate={handleUpdateOpen} todos={todos} handleDelete={handleDelete} handleDone={handleDone} />
    </div>
  );
}

export default App;
