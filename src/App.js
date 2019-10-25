import React from 'react';

import './App.css';
import RollDice from './RollDice';
import Lottary from './Lottary';

function App() {
	return (
		<div className='App'>
			<RollDice />
			<Lottary />
			<Lottary title='Mini' numBalls={4} maxNum={10} />
		</div>
	);
}

export default App;
