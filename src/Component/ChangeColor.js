import React from "react";

const green = '#39D1B4';
const yellow = '#FFD712';

class ChangeColor extends React.Component {
	constructor(props) {
		super(props);
		this.state = { color: green };
		this.changeColor = this.changeColor.bind(this);
	}

	changeColor() {
		const newColor = this.state.color == green ? yellow : green;
		this.setState({ color: newColor });
	}

	render() {
		return (
			<div style={{ background: this.state.color, transition: "all 0.2s" }}>
				<h1>
					Change my color
				</h1>
				<button onClick={this.changeColor}>
					Change color
				</button>
			</div>
		);
	}
}

export default ChangeColor;