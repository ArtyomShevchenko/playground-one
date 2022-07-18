import React, { useState } from "react";

export default function SetStateExampleThree() {

	const [bgColor, setState] = useState("transparent");

	return (
		<div style={{ backgroundColor: bgColor, padding: "1rem" }}>
			<h2 style={{ textAlign: "center" }}>Color: {bgColor}</h2>
			<input type="color" onChange={(e) => {
				setState(e.target.value);
				color = setState(e.target.value);
			}} />
		</div>
	);
}

export let color;