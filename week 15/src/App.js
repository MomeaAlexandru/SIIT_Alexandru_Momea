import React from 'react'
import './App.css';
import Header from './components/Header';
import Input from './components/Input';
import List from './components/List';

function App() {

	const [inputValue, setInputValue] = React.useState('')
	

	const handleOnClick = () => {
		console.log("clicked")
	}

	const getValue = value => setInputValue(value)

  return (
    <div className="App">
		<Header title='TodoList' />
		<Input title="Save" onClick={handleOnClick} getValue={getValue}/>
		<List inputValue={inputValue}/>
    </div>
  );
}

export default App;
