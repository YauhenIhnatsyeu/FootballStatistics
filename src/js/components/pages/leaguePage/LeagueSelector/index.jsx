import React from "react";

import "./index.css";

export default class LeagueSelector extends React.Component {
	constructor(props) {
		super(props);

		this.props.fetchLeague(
			this.props.leaguesData.leaguesIds[this.props.currentLeagueIndex]
		);

		this.props.fetchTeams(
			this.props.leaguesData.leaguesIds[this.props.currentLeagueIndex]
		);
	}

	handleChange = (event) => {
		const leagueIndex =
			this.props.leaguesData.leaguesTitles.indexOf(event.target.value);

		this.props.updateSelectedOptionIndex(
			"currentLeagueIndex",
			leagueIndex
		);

		this.props.fetchTeams(
			this.props.leaguesData.leaguesIds[leagueIndex]
		);
	}

	render() {
		return (
			<div className="selector">
				<select 
					className="selector__select" 
					onChange={this.handleChange} 
					value={this.props.leaguesData.leaguesTitles[this.props.currentLeagueIndex]}>

					{this.props.leaguesData.leaguesTitles.map((title, index) => {
						return (
							<option key={index}>
								{title}
							</option>
						);
					})}
				</select>
			</div>
		);
	}
}