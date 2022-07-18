// import React from 'react';

// class Clock extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			date: new Date()
// 		}
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<h2>{this.props.title}</h2>
// 				<p style={{
// 					color: "yellow",
// 					backgroundColor: "black",
// 					padding: "1rem",
// 					fontSize: "2rem",
// 					textAlign: "center",
// 				}}>{this.state.date.toLocaleTimeString()}</p>
// 			</div>
// 		)
// 	}

// 	componentDidMount() {
// 		// save interval to variable intervalID
// 		this.intervalID = setInterval(() => {
// 			this.setState({ date: new Date() });
// 		}, 1000);
// 	}

// 	componentWillUnmount() {
// 		// clear intervalID
// 		clearInterval(this.intervalID)
// 	}
// }

import React from 'react';

export class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = { date: new Date() };
	}

	// Монтування , коли компонент ініціалізується та вперше поміщається в DOM.
	// Ми побачили, що під час цієї фази викликаються constructor, render()і .componentDidMount()
	render() {
		return (
			<div>
				{this.props.isPrecise
					? this.state.date.toISOString()
					: this.state.date.toLocaleTimeString()}
			</div>
		);
	}

	startInterval() {
		let delay;
		if (this.props.isPrecise) {
			delay = 100;
		} else {
			delay = 1000;
		}
		this.intervalID = setInterval(() => {
			this.setState({ date: new Date() });
		}, delay);
	}

	componentDidMount() {
		this.startInterval();
	}

	// Оновлення , коли компонент оновлюється в результаті зміни стану або змінених атрибутів.
	// Ми це бачили, render()і нас componentDidUpdate()викликали під час цієї фази
	componentDidUpdate(prevProps) {
		if (this.props.isPrecise === prevProps.isPrecise) {
			return;
		}
		clearInterval(this.intervalID);
		this.startInterval();
	}

	// Демонтування , коли компонент видаляється з DOM.
	// Ми побачили, що componentWillUnmount()це викликали сюди, і це був гарний час, щоб навести порядок.
	componentWillUnmount() {
		clearInterval(this.intervalID);
	}
}

export default Clock;