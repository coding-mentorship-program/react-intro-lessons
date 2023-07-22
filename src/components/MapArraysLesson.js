import { useState } from 'react'

function App() {
	const [studentsArray, setStudentsArray] = useState([
		{ name: 'John', age: 21 },
		{ name: 'Jane', age: 15 },
		{ name: 'Ruth', age: 35 },
	])

	function addStudent() {
		setStudentsArray([...studentsArray, { name: 'Mia', age: 15 }])
		// more info here https://react.dev/learn/updating-arrays-in-state
	}

	return (
		<div>
			<h1>State and props lesson</h1>
			<button onClick={() => addStudent()}>Add Student</button>
			<h2>List Students</h2>
			<ul>
				{studentsArray.map(x => (
					<li key={x.name}>{x.name}</li>
				))}
			</ul>
		</div>
	)
}

export default App
