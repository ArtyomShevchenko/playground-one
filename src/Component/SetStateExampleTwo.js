import React, { useState } from "react";

function SetStateExampleTwo() {

	// Створюємо нову змінну стану, яку назвемо "count" та функцію upd
	const [count, upd] = useState(Number(0.5));

	return (
		<div>
			<h2>Ви натиснули {count} разів</h2>
			<button onClick={() => upd(count + 1)}>+</button>
			<button onClick={() => upd(count - 1)}>-</button>
			<button onClick={() => upd(0)}>Reset</button>
		</div>
	);
}

export default SetStateExampleTwo;