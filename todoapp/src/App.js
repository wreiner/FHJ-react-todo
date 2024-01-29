import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import React, { useState, useEffect } from 'react';

function App() {

  const [list, setList] = useState([]);

  useEffect(() => {
    console.log("in useEffect");
    const storedList = localStorage.getItem('todoList');
    console.log(storedList);
    if (storedList !== "undefined" && storedList !== null) {

      setList(JSON.parse(storedList));
    }
  }, []);

  const handleListChange = (newList) => {
    if (typeof newList === 'function') {
      setList((prevList) => {
        const updatedList = newList(prevList);
        localStorage.setItem('todoList', JSON.stringify(updatedList));
        return updatedList;
      });
    } else {
      setList(newList);
      localStorage.setItem('todoList', JSON.stringify(newList));
    }
  };

  return (
    <>
      <h1>ToDo List App</h1>

      <TodoForm list={list} listChanger={handleListChange} updateIdx={null} updateChanger={null} />

      <TodoList list={list} listChanger={handleListChange} />

    </>
  );
}

export default App;
