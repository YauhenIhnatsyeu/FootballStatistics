import React from "react";

export default class Nav extends React.Component {
    render() {
        return (
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a className="nav__link nav__link_state_current" href="#">Table</a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link" href="#">Teams</a>
                    </li>
                </ul>
            </nav>
        );
    }
}