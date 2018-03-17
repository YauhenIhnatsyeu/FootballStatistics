import React from "react";

import {fetchTeamData} from "../utils/FootballDataReceiver";

import TeamItemForHeader from "./team-item-for-header";
import PlayersPanel from "./players-panel";
import FixturesPanel from "./fixtures-panel";

import {Loading, Error} from "./messages";

export default class TeamPanel extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			team: undefined,
			playersTabIsActive: true,
			errorOccured: false
		}

		fetchTeamData(this.props.teamId, this.handleTeamLoaded, this.handleTeamError);
	}
    
    //Is called when team is fetched
    handleTeamLoaded = (team) => {
    	this.setState({
    		team: team,
		});
    }

    //Is called when error occurs while fetching a team
    handleTeamError = () => {
    	this.setState({
    		errorOccured: true
		});
	}
	
	handleTabClick = (tabIndex) => {
		//When one of the two tabs was clicked
		//playersTabIsActive is set to true or false
		//depending of what tab was clicked
		this.setState({
			playersTabIsActive:
				tabIndex === 0 ? true : false
		});
	}
	
	render() {
    	//If an error occured, show the message
    	if (this.state.errorOccured) {
    		return <Error />;
    	}
        
    	//If team is underfined, display loading div
    	if (!this.state.team) {
    		return <Loading />;
		}

		return (
			<div className="team-panel">
				<div className="team-panel__team-item-for-header-container">
					<TeamItemForHeader team={this.state.team} onTabClick={this.handleTabClick} />
				</div>
				<div className="team-panel__info-container">
					{/* If tab was switched, content will be switched too */}
					{this.state.playersTabIsActive ?
						<PlayersPanel team={this.state.team} />
						:
						<FixturesPanel team={this.state.team} />
					}
				</div>
			</div>
		);
	}
}