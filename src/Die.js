import React, { Component } from 'react';
import './Die.scss';

export default class Die extends Component {
	render() {
		return (
			<div>
				<i className={`die fas fa-dice-${this.props.face} ${this.props.rolling ? 'shaking' : ''}`} />
			</div>
		);
	}
}
