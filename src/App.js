import React, { useState } from 'react';
import Todos from './components/Todos'

import './App.css';

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
  // console.log(todos);
  return (
    <div className="App">
      <Todos todos={todos} />
    </div>
  );
}

export default App;
