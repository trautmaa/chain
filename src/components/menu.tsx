import React from 'react';
import './menu.scss';
import { NavLink } from 'react-router-dom';

export const Menu = () => {
	const routes = [ 'contact', 'about', 'posts' ];

	return (
		<div className="menu">
			<nav>
				<ul>
					<li>
						<NavLink exact activeClassName="active" to="/">
							Home
						</NavLink>
					</li>
					{routes.map((route) => (
						<li key={route}>
							<NavLink activeClassName="active" exact to={`/${route}`}>
								{route.slice(0, 1).toUpperCase() + route.slice(1)}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};
