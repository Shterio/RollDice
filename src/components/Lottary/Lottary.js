import React, { Component } from 'react';
import Ball from './Ball/Ball';

export default class Lottary extends Component {
	static defaultProps = {
		title: 'Lotto',
		numBalls: 6,
		maxNum: 40,
	};
	constructor(props) {
		super(props);
		this.state = { nums: Array.from({ length: this.props.numBalls }) };
		this.handleClick = this.handleClick.bind(this);
	}
	generate() {
		this.setState(curState => ({
			nums: curState.nums.map(n => Math.floor(Math.random() * this.props.maxNum) + 1),
		}));
	}

	handleClick() {
		this.generate();
	}

	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				{this.state.nums.map(n => (
					<Ball num={n} />
				))}
				<button onClick={this.handleClick}>GENERETE</button>
			</div>
		);
	}
}
