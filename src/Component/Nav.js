import React from "react";

const elements = ["Home", "Project", "Product", "About Us", "Contact", "Tasks"];

class Nav extends React.Component {
	render() {
		
		const navigation = elements.map(element => {
			return (
				<li key={element} className="asd ">
					<a href={element}>{element}</a>
				</li>
			)
		})

		return <nav> {navigation} </nav>
	}
}

export default Nav;