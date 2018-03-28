import React from "react";

import { BrowserRouter as Router } from "react-router-dom";

import Header from "Components/header/Header";

import Main from "Components/Main";

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <Header />
                    <Main />
                </React.Fragment>
            </Router>
        );
    }
}
