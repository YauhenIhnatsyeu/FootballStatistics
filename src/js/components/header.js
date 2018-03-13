import React from "react";

import {NavLink} from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="header__inner-container">
                    <div className="header__wrapper wrapper">
                        <div className="header__logo-container">
                            <Logo />
                        </div>
                        <div className="header__nav-container">
                            <Nav />
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

class Logo extends React.Component {
    render() {
        return (
            <a className="logo" href="#">Football Statistics</a>
        );
    }
}

class Nav extends React.Component {
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