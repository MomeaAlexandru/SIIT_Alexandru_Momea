import {useEffect, useState} from 'react'
import ListItem from './ListItem';

export const baseURL = "http://localhost:4000";

const List = (props) => {
	const [todos, setTodos] = useState([])

	const fetchData = () => {
		fetch(`${baseURL}/todos`, {
			method: "GET",
			})
			.then(function (response) {
				return response.json();
			})
			.then(function (result) {
				setTodos(result)
			});
	}

	useEffect(() => {
		fetchData();
	}, [fetchData])

	return(
		<div className='ListContainer'>
			{todos.map(element => 
				<ListItem
					id={element.id}
					buttonTwo='Detele'
					text={element.name}
					completed={element.completed}
				/>)}
		</div>
	)
}

export default List