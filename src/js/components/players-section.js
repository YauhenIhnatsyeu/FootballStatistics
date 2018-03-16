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
            currentPageIndex: 0,
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
    
    //Is called when user clicks some control on pagingControls
    handlePagingControlsClick = (pageIndex) => {
        this.setState({
            currentPageIndex: pageIndex
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
        
        //To calculate how many pages we need we must divide players count
        //on allowed player count on one page and round it to the top
        const pagesCount = Math.ceil(this.state.players.length / this.PLAYERS_ON_ONE_PAGE_COUNT);
        
        //Creating an instance of PagingControls, that will be used above and below the PlayersList
        let pagingControls = new PagingControls({
            currentPageIndex: this.state.currentPageIndex,
            pagesCount: pagesCount,
            onClick: this.handlePagingControlsClick
        });

		return (
			<div className="players-section">
                <SectionHeader title="Players" />
                <div className="players-section__paging-controls-container">
                    {/* render - method in PagingControls, that returns the control itself */}
                    {pagingControls.render()}
                </div>
                <div className="players-section__players-list-container">
                    <PlayersList
                        PLAYERS_ON_ONE_PAGE_COUNT={this.PLAYERS_ON_ONE_PAGE_COUNT}
                        players={this.state.players} 
                        currentPageIndex={this.state.currentPageIndex}
                    />
                </div>
                <div className="players-section__paging-controls-container players-section__paging-controls-container_position_bottom">
                    {pagingControls.render()}
                </div>
			</div>
		);
	}
}