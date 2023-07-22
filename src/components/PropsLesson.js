function GrandChild() {
	return <h3>Hi I'm grand child component</h3>
}

function ChildComponent(props) {
	console.log(props)
	return (
		<div>
			<h2>
				hi I'm child component my name is {props.childInfo.name} and I'm {props.childInfo.age}
				I'm {props.childInfo.walking ? 'walking' : 'not walking'}
			</h2>
      <GrandChild /> 
		</div>
	)
}

function PropsLesson() {
	// short hand ->
	// return <h1>this is my PropsLesson component</h1>
	const child1 = {
		name: 'Carlos',
		age: 2,
		walking: false,
	}

	return (
		<div>
			<h1>this is my PropsLesson component</h1>
			<ChildComponent childInfo={child1} />
			{/* <ChildComponent name='Suzy' age={5} walking={true} /> */}
			{/* <ChildComponent name='John' age={15} walking={true} /> */}
		</div>
	)
}

export default PropsLesson
