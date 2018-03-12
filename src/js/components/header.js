import React from "react";

import Logo from "./logo";
import Nav from "./nav";

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