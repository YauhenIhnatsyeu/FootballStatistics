import React from "react";

import LeaguePanel from "./panels/league-panel/league-panel";

import "./index.css";

export default class MainTeams extends React.Component {
	render() {
		return (
			<main>
				<div className="main__inner-container wrapper">
					<div className="main__league-panel-container">
						<LeaguePanel leaguesIds={this.props.leaguesIds} />
					</div>
				</div>
			</main>
		);
	}
}