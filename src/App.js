import React from "react";
import { Routes, Route } from "react-router-dom";
// import "./App.css";
import Header from "./Pages/Header";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import SetStateExample from "./Pages/SetStateExample";
import About from "./Pages/About";
import Team from "./Pages/Team";
import Form from "./Component/Form";
import SocialSideLinks from "./Component/SocialSideLinks";
import Tasks from "./Pages/Tasks";

export default function App() {
	return (
		<div className="app wrapper" style={{
			maxWidth: "600px",
			margin: "0 auto",
			padding: "1rem 0",
		}}>
			<Header />
			<Routes>
				<Route path="*" element={<Error />} />
				<Route path="/" element={<Home title="This is a 'Home page', title from props."/>} />
				<Route path="/setstateexample" element={<SetStateExample />} />
				<Route path="/about" element={<About />} />
				<Route path="/team" element={<Team />} />
				<Route path="/form" element={<Form />} />
				<Route path="/tasks" element={<Tasks />} />
			</Routes>
			<SocialSideLinks />
		</div>
	);
}