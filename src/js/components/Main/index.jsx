import React from "react";

import {
	Route,
	Switch,
	Redirect
} from "react-router-dom";

import TablePanel from "Panels/tablePanel/TablePanel";
import TeamPanel from "Panels/teamPanel/TeamPanel";
import LeaguePanel from "Panels/leaguePanel/LeaguePanel";

import "./index.css";

export default class Main extends React.Component {
	render() {
		const tablePanel = (
			<div className="main__table-panel-container">
				<TablePanel leaguesIds={this.props.leaguesIds} />
			</div>
		);

		const leaguePanel = (
			<div className="main__league-panel-container">
				<LeaguePanel leaguesIds={this.props.leaguesIds} />
			</div>
		);

		const teamPanel = (props) => (
			<div className="main__team-panel-container">
				<TeamPanel teamId={props.match.params.id} />
			</div>
		);

		return (
			<main>
				<div className="main__inner-container wrapper">
					<Switch>
						<Route path="/table" render={() => tablePanel} />
						<Route path="/teams" render={() => leaguePanel} />
						<Route path="/team/:id" render={(props) => teamPanel(props)} />
						<Redirect to="/table" />
					</Switch>
				</div>
			</main>
		);
	}
}