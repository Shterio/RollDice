import React, { Component } from 'react';
import './Box.scss';
export default class Box extends Component {
	constructor(props) {
		super(props);
		this.state = {
			color: this.choice(this.props.colors),
		};
	}

	choice = arr => {
		let randomIndex = Math.floor(Math.random() * arr.length);
		return arr[randomIndex];
	};

	pickColor() {
		let newColor;
		do {
			newColor = this.choice(this.props.colors);
		} while (newColor === this.state.color);

		this.setState({ color: newColor });
	}

	handleClick = () => {
		this.pickColor();
	};
	render() {
		return <div style={{ backgroundColor: this.state.color }} onClick={this.handleClick} className='Box'></div>;
	}
}
