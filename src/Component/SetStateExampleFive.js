import React, { useState } from 'react'

function SetStateExampleFive(props) {
	const [element, setElement] = useState("");

	return (
		<div>
			<h2>{props.name}{element}</h2>
			<input type="text" onChange={(e) => setElement(e.target.value)} />
		</div>
	)
}

export default SetStateExampleFive;