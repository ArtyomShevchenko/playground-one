import React, { useState } from "react";

function Subject() {

	const [state, setState] = useState(
		{
			currentGrade: 'B',
			classmates: ['Hasan', 'Sam', 'Emma'],
			classDetails: { topic: 'Math', teacher: 'Ms. Barry', room: 201 },
			exams: [{ unit: 1, score: 91 }, { unit: 2, score: 88 }]
		});

	return (
		<div>
			<h2>Subject from state</h2>
		</div >
	)
};

export default Subject;