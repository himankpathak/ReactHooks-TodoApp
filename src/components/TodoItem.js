import React from 'react'
import PropTypes from 'prop-types';

export default function TodoItem(props) {

	return (
		<div>
			<p>{ props.todo.title }</p>
		</div>
	)
}

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired
  }
