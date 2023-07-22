// the only way that Component re-renders is STATE or PROPS change
import { useState } from 'react'

function App() {
	const [name, setName] = useState('nameless') // <- initial value
	const [person, setPerson] = useState({ age: 3 }) // <- initial value
	const [counter, setCounter] = useState(0) // <- initial state

	function updateName() {
		setName('Claudia') // <- updating name
	}

	function updatePerson() {
		setPerson({ age: 15 })
	}

	const addOne = () => {
		setCounter(counter + 1)
		// setCounter(previousState => previousState + 1)
	}

	return (
		<div>
			<h1>State lesson</h1>
			<p>my name is {name}</p>
			<button onClick={() => updateName()}>update</button>
			<p>{person.age}</p>
			<button onClick={() => updatePerson()}>update person</button>
			<br />
			<p>this is counter - {counter}</p>
			<button onClick={() => addOne()}>Add 1</button>
		</div>
	)
}

export default App
