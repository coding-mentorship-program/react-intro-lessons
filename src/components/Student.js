// destructuring objects
// const { property1, property2 } = oldObject

import { useState } from 'react'

function Student(props) {
	const [enrolled, setEnrrolled] = useState(false)

	console.log(props) // props.studentInfo --> { name: 'John', age: 21, city: 'Boca', drive: false, family: { pet1: '🐠', pet2: '🐶' } }

	const { name, age, city, drive, family } = props.studentInfo

	return (
		<li style={{ color: enrolled ? 'green' : 'red' }}>
			Hi I'm student and my name is {name} i'm {age} and live in {city}
			<button onClick={() => setEnrrolled(true)}>Enroll</button>
		</li>
	)
}

export default Student
