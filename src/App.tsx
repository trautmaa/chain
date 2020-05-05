import React from 'react';
import './App.scss';
import { Social } from './components/social';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/routes';
import Header from './components/header';

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Routes />
			</Router>
			<footer>
				<Social />
			</footer>
		</div>
	);
}

export default App;
