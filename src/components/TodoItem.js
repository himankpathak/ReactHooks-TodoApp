import React from 'react'
import PropTypes from 'prop-types';

function getStyle(todo) {
	return {
		background: 'grey',
		padding: '10px',
		borderBottom: '1px #ccc dotted',
		textDecoration: todo.completed ? 'line-through' : 'none',
	}
}

export default function TodoItem(props) {
	const { id, title } = props.todo;
	return (
		<div style={getStyle(props.todo)}>
			<p>
				<input type="checkbox" onChange={props.toggleComplete.bind(this,id)} />
				{' '}{ title }
				<button onClick={props.delTodo.bind(this, id)} style={btnStyle}>X</button>
			</p>
		</div>
	)
}

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired
  }

const btnStyle = {
	background: '#ff0000',
	color: '#fff',
	border: 'none',
	padding: '5px 9px',
	cursor: 'pointer',
	borderRadius: '50%',
	float: 'right'
}
