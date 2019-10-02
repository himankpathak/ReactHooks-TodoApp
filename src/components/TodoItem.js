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
			</p>
		</div>
	)
}

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired
  }
