import React from "react";

import {BrowserRouter as Router, Link} from "react-router-dom";

import "./index.css";

export default class Logo extends React.Component {
	render() {
		return (//<React.Fragment>
		// 	<Router>
		// 		<React.Fragment>
					<Link to="/table" className="logo">Football Statistics</Link>
			// 	</React.Fragment>
			// </Router>
			// </React.Fragment>
		);
	}
}