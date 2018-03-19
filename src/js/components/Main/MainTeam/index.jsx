import React from "react";

import TeamPanel from "./panels/team-panel/team-panel";

import "./index.css";

export default class MainTeam extends React.Component {
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
