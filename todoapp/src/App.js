import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { useState } from 'react';
import React from 'react';

function App() {
  const [list, setList] = useState([]);

  return (
    <div>
      <h1>ToDo List App</h1>

      <TodoForm listChanger={setList} />

      <TodoList list={list} listChanger={setList} />
    </div>
  );
}

export default App;
