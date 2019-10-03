import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
	const newTodo = {
		id: todos.slice(-1)[0]['id']+1,
		title,
		completed: false
	}
	setTodos(
		[...todos, newTodo]
	);
}

function delTodo(id, todos, setTodos) {
	setTodos(
		[...todos.filter(todo => todo.id !== id)]

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
