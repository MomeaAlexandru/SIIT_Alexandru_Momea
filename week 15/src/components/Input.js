import React from 'react'
import './Input.css'
import { baseURL } from './List'

const Input = (props) => {
	const [value, setValue] = React.useState('')

	const handleOnChange = (event) => {
		setValue(event.target.value)
		console.log(value)
	}

	const addTodo = (item) => {
		fetch(`${baseURL}/todos`, {
		  method: "POST",
		  headers: {
			'Content-Type': 'application/json' // ii spunem la server ca trimitem json
		  },
		  body: JSON.stringify(item)
		})
	}

	const handleOnSubmit = (event) => {
		event.preventDefault();
		const newTodo = {
			name: value,
			completed: false
		  }
		addTodo(newTodo)
	}


	return (
		<div>
			<form onSubmit={handleOnSubmit}>
				<input className="InputContainer" onChange={handleOnChange}/>
			</form>
			{props.hasButton && <button className="InputContainer Button" onClick={props.onClick}>{props.title}</button>}
		</div>
	)
}

export default Input;