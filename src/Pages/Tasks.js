import React from "react";
import PersonalPizza from "../Component/PersonalPizza";
import TasksOne from "../Component/TasksOne";

function Tasks() {
	return (
		<div>
			<h2>Tasks example</h2>
			<PersonalPizza />
			<hr />
			<TasksOne />
		</div>
	)
}

export default Tasks;