import React from "react";

import {fetchLeaguesTeamsData} from "../utils/FootballDataReceiver";

import TeamItem from './team-item';

import {Loading, Error} from "./messages";

export default class TeamsList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			leaguesTeams: undefined,
			errorOccured: false
		};

		//Fetch leagues teams data from Football API
		fetchLeaguesTeamsData(this.props.leaguesIds, this.handleLeaguesTeamsLoaded, this.handleLeaguesTeamsError);
	}
    
    //Is called when all leagues teams are fetched
    handleLeaguesTeamsLoaded = (leaguesTeams) => {
    	this.setState({
    		leaguesTeams: leaguesTeams,
    	});
    }

    //Is called when error occurs while fetching leagues tables
    handleLeaguesTeamsError = () => {
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
			<div className="teams-list">
				{this.state.leaguesTeams[this.props.currentLeagueTableIndex].teams.map((team, index) => {
					return (
						<div className="teams-list__team-item-container" key={index}>
							<TeamItem team={team} />
    					</div>
					);
				})}
    		</div>
    	);
    }
}