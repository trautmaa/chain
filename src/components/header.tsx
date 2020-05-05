import React from 'react';
import { Menu } from './menu';
import logo from '../assets/logo.png';

const Header = () => {
	return (
		<header className="App-header">
			<div className="flex">
				<div className="title-block">
					<img src={logo} alt="" />
					<div className="titles">
						<h1>Chain Lightning</h1>
						<div className="subtitle">Greater Atlanta Area Ultimate</div>
					</div>
				</div>
				<Menu />
			</div>
		</header>
	);
};

export default Header;
