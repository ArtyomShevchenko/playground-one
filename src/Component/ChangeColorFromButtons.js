import React, { useState } from "react";

function ColorPicker() {

	const [color, setColor] = useState("Thistle");

	const colors = ['Aquamarine', 'BlueViolet', 'Chartreuse', 'CornflowerBlue', 'Thistle', 'SpringGreen', 'SaddleBrown', 'Tomato', 'MistyRose'];

	return (
		<div style={{ backgroundColor: color, padding: "0.5rem", transition: "all .2s"}}>
			<p>The color is {color}</p>
			<div style={{width: "100%", height: "100%", display: "flex", flexWrap: "wrap", gap: "0.5rem"}}>
				{colors.map((element, index) => {
					return (
						<button key={index} style={{ minWidth: "10px", backgroundColor: element, padding: "0.5rem", border: "1px solid black", borderRadius: "4px" }} onClick={() => setColor(element)}>
							{element} 
						</button>
					)
				})}
			</div>
		</div>
	);

};


export default ColorPicker;