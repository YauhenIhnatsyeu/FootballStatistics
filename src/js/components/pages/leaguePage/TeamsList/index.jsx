import React from "react";

import {fetchLeaguesTeamsData} from "Utilities/fetchFootballData";

import TeamItem from "../TeamItem";

import Loading from "Components/messages/Loading";
import Error from "Components/messages/Error";

import "./index.css";

export default class TeamsList extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }
    
    // handleLeaguesTeamsLoaded = (leaguesTeams) => {
    // 	this.setState({
    // 		leaguesTeams: leaguesTeams,
    // 	});
    // }

    // handleLeaguesTeamsError = () => {
    // 	this.setState({
    // 		errorOccured: true
    // 	});
    // }

    render() {
    	if (this.props.fetchingError) {
    		return <Error />;
    	}
        
    	if (!this.props.currentTeams) {
    		return <Loading />;
    	}

    	return (
			<div className="teams-list">
				{this.props.currentTeams.teams.map((team, index) => {
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