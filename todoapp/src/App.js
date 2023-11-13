import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { useState } from 'react';
import React from 'react';

function App() {

  const [list, setList] = useState([]);
  // const [updateEntry, setUpdateEntry] = useState({});

  return (
    <div>
      <h1>ToDo List App</h1>

      <TodoForm list={list} listChanger={setList} updateIdx={null} updateChanger={null} />

      <TodoList list={list} listChanger={setList} />

    </div>
  );
}

export default App;
