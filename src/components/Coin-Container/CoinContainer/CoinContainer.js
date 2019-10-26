import React, { Component } from 'react';
import './CoinContainer.scss';

export default class CoinContainer extends Component {
	static defaultProps = {
		coins: [
			{ side: 'heads', imgSrc: 'https://tinyurl.com/react-coin-heads-jpg' },
			{ side: 'tails', imgSrc: 'https://tinyurl.com/react-coin-tails-jpg' },
		],
	};
	constructor(props) {
		super(props);
		this.state = {
			currCoin: null,
			nFlips: 0,
			nHeads: 0,
			nTails: 0,
		};
	}

	choice = arr => {
		let randomIndex = Math.floor(Math.random() * arr.length);
		return arr[randomIndex];
	};

	flipCoin() {
		const newCoin = this.choice(this.props.coins);
		this.setState(currState => {
			return {
				currCoin: newCoin,
				nFlips: currState.nFlips + 1,
				nHeads: currState.nHeads + (newCoin.side === 'heads' ? 1 : 0),
				nTails: currState.nTails + (newCoin.side === 'tails' ? 1 : 0),
			};
		});
	}

	handleClick = () => {
		this.flipCoin();
	};

	render() {
		return (
			<div className='CoinContainer'>
				<h1>{this.props.title}</h1>
				<div className='Coin'>
					{this.state.currCoin && <img src={this.state.currCoin.imgSrc} alt={this.state.side} />}
				</div>
				<button onClick={this.handleClick}>FLIP Me</button>
				<p>
					Out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads and {this.state.nTails}{' '}
					tails.
				</p>
			</div>
		);
	}
}
