import React from 'react';
import logo from './logo.svg';
import './App.css';
import Delayed from '../Delayed/Delayed';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<p>
					After having mildly amused and distracted the user for several seconds, (using plain javascript, css
					& html), much of the React loading should have completed.
				</p>
				<img src={logo} className="App-logo" alt="logo" />
				<Delayed />
			</header>
		</div>
	);
}

export default App;
