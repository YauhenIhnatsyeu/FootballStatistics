import React from "react";

import fetchFootbalData from "Utilities/FootballDataReceiver";

import SectionHeader from "Components/SectionHeader";
import PagingControls from "Components/PagingControls";
import PlayersList from "../PlayersList";

import Loading from "Components/messages/Loading";
import Error from "Components/messages/Error";

import "./index.css";

export default class PlayersSection extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
            players: undefined,
            currentPageIndex: 0,
			errorOccured: false
        }

		this.PLAYERS_ON_ONE_PAGE_COUNT = 20;

		const playersUrl = this.props.team._links.self.href + "/players";
		fetchFootbalData(playersUrl, this.handlePlayersLoaded, this.handlePlayersError);
    }
    
    handlePlayersLoaded = (players) => {
    	this.setState({
    		players: players.players.sort(this.sorterByJerseyNumber)
        });
    }

    handlePlayersError = () => {
    	this.setState({
    		errorOccured: true
    	});
    }
    
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
    	if (this.state.errorOccured) {
    		return <Error />;
    	}
        
    	if (!this.state.players) {
    		return <Loading />;
        }
        
        const pagesCount = Math.ceil(this.state.players.length / this.PLAYERS_ON_ONE_PAGE_COUNT);
        
        const pagingControls = new PagingControls({
            currentPageIndex: this.state.currentPageIndex,
            pagesCount: pagesCount,
            onClick: this.handlePagingControlsClick
        });

		return (
			<React.Fragment>
                {/* If players count is bigger than maximum allowed
                    display paging controls*/}
                {this.state.players.length <= this.PLAYERS_ON_ONE_PAGE_COUNT || 
                    <div className="players-section__paging-controls-container">
                        {pagingControls.render()}
                    </div>
                }
                <div className="players-section__players-list-container">
                    <PlayersList
                        playersOnOnePageCount={this.PLAYERS_ON_ONE_PAGE_COUNT}
                        players={this.state.players} 
                        currentPageIndex={this.state.currentPageIndex}
                    />
                </div>
                {this.state.players.length <= this.PLAYERS_ON_ONE_PAGE_COUNT || 
                    <div className="players-section__paging-controls-container players-section__paging-controls-container_position_bottom">
                        {pagingControls.render()}
                    </div>
                }
			</React.Fragment>
		);
	}
}