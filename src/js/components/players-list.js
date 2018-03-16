import React from "react";

import fetchFootbalData from "../utils/FootballDataReceiver";

import PlayerItem from "./player-item";

import {Loading, Error} from "./messages";

export default class PlayersList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			players: undefined,
			errorOccured: false
		}

		//Creating url to request players from this team
		const playersUrl = this.props.team._links.self.href + "/players";
		//Fetch players
		fetchFootbalData(playersUrl, this.handlePlayersLoaded, this.handlePlayersError);
	}
    
    //Is called when all players are fetched
    handlePlayersLoaded = (players) => {
    	this.setState({
			//Actual array of players is stored in players property
			//Sort it by jerseyNumber property
    		players: players.players.sort(this.sorterByJerseyNumber)
    	});
    }

    //Is called when error occurs while fetching players
    handlePlayersError = () => {
    	this.setState({
    		errorOccured: true
    	});
	}
	
	handleTabClick = (tabIndex) => {
		
	}

	sorterByJerseyNumber = (a, b) => {
		if (a.jerseyNumber > b.jerseyNumber)
			return 1;
		if (a.jerseyNumber < b.jerseyNumber)
			return -1;
		return 0;
	}
	
	render() {
    	//If an error occured, show the message
    	if (this.state.errorOccured) {
    		return <Error />;
    	}
        
    	//If team is underfined, display loading div
    	if (!this.state.players) {
    		return <Loading />;
		}
		
		return (
			<div className="players-list">
				{this.state.players.map((player, index) => {
					return (
						<div key={index} className="players-list__player-item-container">
							<PlayerItem player={player} />
						</div>
					)
				})}
			</div>
		);
	}
}