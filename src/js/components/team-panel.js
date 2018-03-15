import React from "react";

import {fetchTeamData} from "../utils/FootballDataReceiver";

import TeamsItemForHeader from "./teams-item-for-header";

import {Loading, Error} from "./messages";

export default class TeamPanel extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			team: undefined,
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
				<div className="team-panel__teams-item-for-header-container">
					<TeamsItemForHeader team={this.state.team} />
				</div>
			</div>
		);
	}
}