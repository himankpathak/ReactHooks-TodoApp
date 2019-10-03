import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';

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

function addTodo(title, todos, setTodos){
	axios.post('https://jsonplaceholder.typicode.com/todos',{
		title,
		completed: false
	})
	.then(res => {res.data.id = todos.slice(-1)[0]['id']+1; setTodos([...todos, res.data]);});
}

function delTodo(id, todos, setTodos) {
	axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
		.then(res => setTodos(
			[...todos.filter(todo => todo.id !== id)]
		));
}

function TodoMain(props) {
	const { todos, setTodos } = props;
	return(
		<React.Fragment>
			<AddTodo addTodo={(title) => {addTodo(title, todos, setTodos) }} />
			<Todos todos={todos}
			toggleComplete={(id) => { toggleComplete(id, todos, setTodos) }}
			delTodo={(id) => { delTodo(id, todos, setTodos) }} />
		</React.Fragment>
	);
}

function App() {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
			.then(res => setTodos(res.data))
	}, []);

	return (
		<Router>
			<div className="App">
				<div className="container">
					<Header />
					<Switch>
						<Route exact path="/">
							<TodoMain todos={todos} setTodos={setTodos} />
						</Route>
						<Route path="/about">
							<About />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
