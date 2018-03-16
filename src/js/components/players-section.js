import React from "react";

import fetchFootbalData from "../utils/FootballDataReceiver";

import SectionHeader from "./section-header";
import PagingControls from "./paging-controls";
import PlayersList from "./players-list";

import {Loading, Error} from "./messages";

export default class PlayersSection extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
            players: undefined,
            //Index, from which players will be counted in PlayersList
            playersListStartIndex: 0,
			errorOccured: false
        }

        //How many players item can be in PlayersList
		this.PLAYERS_ON_ONE_PAGE_COUNT = 20;

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
    
    //Is called when user clicks some control on PaginControls
    handlePagingControlsClick = (pageIndex) => {
        this.setState({
            //Calculateing playersListStartIndex based on new current page
            playersListStartIndex:
                pageIndex * this.PLAYERS_ON_ONE_PAGE_COUNT
        });
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
        
    	//If players are underfined, display loading div
    	if (!this.state.players) {
    		return <Loading />;
        }
        
		return (
			<div className="players-section">
                <SectionHeader title="Players" />
                <div className="players-section__paging-controls-container">
                    <PagingControls
                        pagesCount={
                            //To calculate how pmany pages we need we must divide players count
                            //on allowed player count on one page and round it to the top
                            Math.ceil(this.state.players.length / this.PLAYERS_ON_ONE_PAGE_COUNT)
                        }
                        onClick={this.handlePagingControlsClick}
                    />
                </div>
                <div className="players-section__players-list-container">
                    <PlayersList players={this.state.players} startIndex={this.state.playersListStartIndex} />
                </div>
			</div>
		);
	}
}