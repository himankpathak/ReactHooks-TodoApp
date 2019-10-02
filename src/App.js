import React, { useState } from 'react';
import Todos from './components/Todos'

import './App.css';

function toggleComplete(id, todos, setTodos) {
  setTodos(
  todos.map( todo => {
    if(todo.id === id) {
      todo.completed = !todo.completed
    }
    return todo;
  }));
}

function delTodo(id, todos, setTodos) {
  setTodos(
    [...todos.filter(todo => todo.id !== id)]
    );
}

function App() {
  const [todos, setTodos] = useState(
    [
      {
        id: 1,
        title: 'Complete homework',
        completed: false
      },
      {
        id: 2,
        title: 'Work on project',
        completed: false
      },
      {
        id: 3,
        title: 'Take dog out for walk',
        completed: false
      }
    ]
  );

  return (
    <div className="App">
      <Todos todos={todos}
      toggleComplete={(id) => { toggleComplete(id, todos, setTodos) }} 
      delTodo={(id) => { delTodo(id, todos, setTodos) }} />
    </div>
  );
}

export default App;
