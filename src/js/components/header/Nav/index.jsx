import React from "react";

import {NavLink} from "react-router-dom";

import "./index.css";

export default class Nav extends React.Component {
	render() {
		return (
			<nav className="nav">
				<ul className="nav__list">
					<li className="nav__item">
						<NavLink to="/table" className={"nav__link"} activeClassName={"nav__link_state_active"}>Table</NavLink>
					</li>
					<li className="nav__item">
						<NavLink to="/teams" className={"nav__link"} activeClassName={"nav__link_state_active"}>Teams</NavLink>
					</li>
				</ul>
			</nav>
		);
	}
}