import React from "react";

import {fetchTeamData} from "../utils/FootballDataReceiver";

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
    handleTeamLoaded = (leaguesTeams) => {
    	this.setState({
    		leaguesTeams: leaguesTeams,
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
    	if (!this.state.leaguesTeams) {
    		return <Loading />;
    	}
		//console.log(this.state.team);
		return (
			null
		);
	}
}