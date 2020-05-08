import React from "react";
import "./menu.scss";
import { NavLink } from "react-router-dom";
import {routesList } from './routes';

export const Menu = () => {
  return (
    <div className="menu">
      <nav>
        <ul>
          <li>
            <NavLink exact activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          {routesList.map(({ slug }) => (
            <li key={slug}>
              <NavLink activeClassName="active" exact to={`/${slug}`}>
                {slug.slice(0, 1).toUpperCase() + slug.slice(1)}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
