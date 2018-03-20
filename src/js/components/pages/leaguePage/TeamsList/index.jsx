import React from "react";

import {fetchLeaguesTeamsData} from "Utilities/fetchFootballData";

import TeamItem from "../TeamItem";

import Loading from "Components/messages/Loading";
import Error from "Components/messages/Error";

import "./index.css";

export default class TeamsList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			leaguesTeams: undefined,
			errorOccured: false
		};

		fetchLeaguesTeamsData(this.props.leaguesIds, this.handleLeaguesTeamsLoaded, this.handleLeaguesTeamsError);
	}
    
    handleLeaguesTeamsLoaded = (leaguesTeams) => {
    	this.setState({
    		leaguesTeams: leaguesTeams,
    	});
    }

    handleLeaguesTeamsError = () => {
    	this.setState({
    		errorOccured: true
    	});
    }

    render() {
    	if (this.state.errorOccured) {
    		return <Error />;
    	}
        
    	if (!this.state.leaguesTeams) {
    		return <Loading />;
    	}

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