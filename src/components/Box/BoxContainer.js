import React, { Component } from 'react';
import Box from './Box';

export default class BoxContainer extends Component {
	static defaultProps = {
		numBoxes: 18,
		allColors: ['purple', 'magenta', 'violet', 'pink'],
	};
	render() {
		const boxes = Array.from({ length: this.props.numBoxes }).map(() => {
			return <Box colors={this.props.allColors} />;
		});
		return <div className='Container'>{boxes}</div>;
	}
}
