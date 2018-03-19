import React from "react";

import TablePanel from "./panels/table-panel/table-panel";
import LeaguePanel from "./panels/league-panel/league-panel";
import TeamPanel from "./panels/team-panel/team-panel";

export class MainTable extends React.Component {
	render() {
		return (
			<main>
				<div className="main__inner-container wrapper">
					<div className="main__table-panel-container">
						<TablePanel leaguesIds={this.props.leaguesIds} />
					</div>
				</div>
			</main>
		);
	}
}

export class MainTeams extends React.Component {
	render() {
		return (
			<main>
				<div className="main__inner-container wrapper">
					<LeaguePanel leaguesIds={this.props.leaguesIds} />
				</div>
			</main>
		);
	}
}

export class MainTeam extends React.Component {
	render() {
		return (
			<main>
				<div className="main__inner-container wrapper">
					<div className="main__team-panel-container">
						<TeamPanel teamId={this.props.match.params.id} />
					</div>
				</div>
			</main>
		);
	}
}