import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { useState } from 'react';

function App() {
  return (
    <div>
      <h1>ToDo List App</h1>

      <TodoForm />

      <TodoList />
    </div>
  );
}

export default App;
