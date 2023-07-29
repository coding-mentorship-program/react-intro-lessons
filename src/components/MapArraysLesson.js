import { useState } from 'react'
import Student from './Student'

function App() {
	const [studentsArray, setStudentsArray] = useState([
		{ name: 'John', age: 21, city: 'Boca', drive: false, family: { pet1: '🐠', pet2: '🐶' } },
		{ name: 'Jane', age: 15, city: 'Miami', drive: true, family: { pet1: '🐠' } },
		{ name: 'Ruth', age: 35, city: 'Del Ray', drive: true, family: { pet1: '🐶' } },
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
				{studentsArray &&
					studentsArray.map(eachStudent => (
						// <li key={eachStudent.name}>{eachItem.name}</li>

						// each item is the entire object per item in the array
						<Student studentInfo={eachStudent} />
						// <Student name={eachItem.name} age={eachItem.age} city={eachItem.city} drive={eachItem.drive} />
					))}
			</ul>
		</div>
	)
}

export default App
