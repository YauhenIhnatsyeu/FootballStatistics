import React from "react";

import {BrowserRouter as Router} from "react-router-dom";

import Header from "Components/header/Header";

import Main from "Components/Main";

export default class App extends React.Component {
	constructor(props) {
		super(props);

		//leagueTable Id points to a specific leagueTable in the leagueTable tables in the Football API 
		this.leaguesIds = [445, 452, 455, 456, 450];
	}

	render() {
		return (
			<React.Fragment>
				<Router>
					<React.Fragment>
						<Header />
						<Main leaguesIds={this.leaguesIds}/>
					</React.Fragment>
				</Router>
			</React.Fragment>
		);
	}
}