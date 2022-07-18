import React from "react";
import PostOne from "../Component/PostOne";

function Home(props) {
	return (
		<div>
			<h1>{props.title ? props.title : "Home page"}</h1>
			<PostOne />
		</div>
	)
}

export default Home;