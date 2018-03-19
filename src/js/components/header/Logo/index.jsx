import React from "react";

import {BrowserRouter as Router, Link} from "react-router-dom";

import "./index.css";

export default class Logo extends React.Component {
	render() {
		return (
			<Link to="/table" className="logo">Football Statistics</Link>
		);
	}
}