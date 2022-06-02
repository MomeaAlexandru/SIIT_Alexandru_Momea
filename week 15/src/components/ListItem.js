import React from 'react'
import './ListItem.css'
import { baseURL } from './List';
const ListItem = (props) => {
	const [checked, setChecked] = React.useState(props.completed);

	const removeTodo = () => {
		fetch(`${baseURL}/todos/${props.id}`, {
		  method: "DELETE",
		})
	  }
	  
	const updateTodo = (value) => {
		const updateTodoData = {
		  name: props.text,
		  completed: value
		}
		fetch(`${baseURL}/todos/${props.id}`, {
		  method: "PUT",
		  headers: {
			'Content-Type': 'application/json' // ii spunem la server ca trimitem json
		  },
		  body: JSON.stringify(updateTodoData)
		})
	  }

	  const checkValue = event => {
		setChecked(event.target.checked)
		updateTodo(event.target.checked)
	}

	const isItemChecked = checked ? 'CheckedText' : ''

	return(
		<div className="ListItemContainer">
			<input className="Checkbox" type='checkbox' onChange={checkValue} defaultChecked={props.completed}/>
			<div className={`Text ${isItemChecked}`}>{props.text}</div>
			<button className="Buttons" onClick={removeTodo}>{props.buttonTwo}</button>
		</div>
	)
}

export default ListItem