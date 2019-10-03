import React, { useState } from 'react'
import PropTypes from 'prop-types';

function onSubmitTodo(e, props, title, setTitle) {
    e.preventDefault();
    props.addTodo(title);
    setTitle('');
}

export default function AddTodo(props) {
    const [title, setTitle] = useState("");

    return (
        <form onSubmit={(e)=> {onSubmitTodo(e, props, title, setTitle)}} style={{ display: 'flex' }}>
            <input 
                type = "text"
                name = "title"
                placeholder = "Add Todo"
                style = {{ flex:'10', padding: '5px' }}
                value = {title}
                onChange = {(e)=> {setTitle(e.target.value)}}
            />
            <input 
                type="submit"
                value="submit"
                className="btn"
                style={{ flex:'1' }}
            />
        </form>
    )
}

AddTodo.propTypes = {
	addTodo: PropTypes.func.isRequired
  }