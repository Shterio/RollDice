import React from 'react';

import './App.css';
import RollDice from './components/RollDice/RollDice/RollDice';
import Lottary from './components/Lottary/Lottary';
import CoinContainer from './components/Coin-Container/CoinContainer/CoinContainer';
import BoxContainer from './components/Box/BoxContainer';

function App() {
	return (
		<div>
			<div className='App'>
				<RollDice />
				<Lottary />
				<Lottary title='Mini' numBalls={4} maxNum={10} />
				<CoinContainer title='Let`s Flip A Coin!' />
			</div>
			<div>
				<BoxContainer />
			</div>
		</div>
	);
}

export default App;
