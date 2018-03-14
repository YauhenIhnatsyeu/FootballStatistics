import React from "react";

import {fetchLeaguesTeamsData} from "../utils/FootballDataReceiver";

import TeamsItem from "./teams-item";

import {Loading, Error} from "./messages";

export default class TeamsList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			leaguesTeams: undefined,
			errorOccured: false
		};

		//Fetch leagues teams data from Football API
		fetchLeaguesTeamsData(this.props.leaguesIds, this.handleleaguesTeamsLoaded, this.handleleaguesTeamsError);
	}
    
    //Is called when all leagues teams are fetched
    handleleaguesTeamsLoaded = (leaguesTeams) => {
    	this.setState({
    		leaguesTeams: leaguesTeams,
    	});
    }

    //Is called when error occurs while fetching leagues tables
    handleleaguesTeamsError = () => {
    	this.setState({
    		errorOccured: true
    	});
    }

    render() {
    	//If an error occured, show the message
    	if (this.state.errorOccured) {
    		return <Error />;
    	}
        
    	//If leaguesTeams is underfined, display loading div
    	if (!this.state.leaguesTeams) {
    		return <Loading />;
    	}

    	//If leaguesTeams isn't underfined it can be displayed
    	return (
    		<div className="main__teams-list-container">
    			<div className="teams-list">
    				{this.state.leaguesTeams[this.props.currentLeagueTableIndex].teams.map((team, index) => {
    					return (
    						<TeamsItem team={team} key={index} />
    					);
    				})}
    			</div>
    		</div>
    	);
    }
}