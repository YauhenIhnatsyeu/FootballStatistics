import React, { Component } from "react";

import { NavLink } from "react-router-dom";

import routePaths from "Constants/routePaths";

import "./index.css";

export default class Nav extends Component {
    renderNavItem = path => (
        <li className="nav__item">
            <NavLink
                to={path}
                className="nav__link"
                activeClassName="nav__link_state_active"
            >
                Table
            </NavLink>
        </li>
    )

    render() {
        return (
            <nav className="nav">
                <ul className="nav__list">
                    {this.renderNavItem(routePaths.table)}
                    {this.renderNavItem(routePaths.teams)}
                </ul>
            </nav>
        );
    }
}
