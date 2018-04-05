import React, { Component } from "react";

import { NavLink } from "react-router-dom";

import routepaths from "Constants/routepaths";

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
                    {this.renderNavItem(routepaths.table)}
                    {this.renderNavItem(routepaths.teams)}
                </ul>
            </nav>
        );
    }
}
