import React from "react";

import { Link } from "react-router-dom";

import "./index.css";

export default class Logo extends React.Component {
    render() {
        return (
            <Link to="/table" className="logo">Football Statistics</Link>
        );
    }
}
