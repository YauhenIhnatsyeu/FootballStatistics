import React from "react";

import {fetchLeaguesTablesData} from "../../../utils/FootballDataReceiver";

import SectionHeader from "../../section-header";
import LeagueSelector from "./league-selector";

import TeamsList from "./teams-list";

import {Loading, Error} from "../../messages";

export default class leagueTablePanel extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			leaguesTables: undefined,
			currentLeagueTableIndex: 0,
			errorOccured: false
		};

		//Fetch leagues tables data from Football API
		fetchLeaguesTablesData(this.props.leaguesIds, this.handleLeaguesLoaded, this.handleLeaguesError);
	}

    //Is called when all leagues tables are fetched
    handleLeaguesLoaded = (leaguesTables) => {
    	this.setState({
    		leaguesTables: leaguesTables,
    	});
    }

    //Is called when error occurs while fetching leagues tables
    handleLeaguesError = () => {
    	this.setState({
    		errorOccured: true
    	});
    }

    //Is called when option in select was changed
    handleChange = (event) => {
    	//Determination of new current leagueTable index based on its caption
    	let newIndex = 0;
    	for (let i = 1; i < this.state.leaguesTables.length; i++ ) {
    		if (this.state.leaguesTables[i].leagueCaption === event.target.value) {
    			newIndex = i;
    		}
    	}
    	//After new index was found out we must update the state
    	//in order to update components
    	this.setState({
    		currentLeagueTableIndex: newIndex
    	});
    }

    render() {
    	//If an error occured, show the message
    	if (this.state.errorOccured) {
    		return <Error />;
    	}

    	//If leaguesTables is underfined, display loading div
    	if (!this.state.leaguesTables) {
    		return <Loading />;
    	}

    	//If leaguesTables isn't underfined it can be displayed
    	return (
    		<div className="main__league-panel-container">
    			{/* Passing title of current leagueTable caption to the PageHeader */}
    			<SectionHeader 
    				title={this.state.leaguesTables[this.state.currentLeagueTableIndex].leagueCaption}
    			/>

    			<LeagueSelector
    				//Mapping through leaguesTables and passing leagueTable titles to options
    				options={this.state.leaguesTables.map((leagueTable) => {
    					return leagueTable.leagueCaption;
    				})}

    				onChange={(event) => this.handleChange(event)}

    				//Passing title of current leagueTable to the default value
    				default={this.state.leaguesTables[this.state.currentLeagueTableIndex].leagueCaption}
    			/>
				
				<div className="league-panel__teams-list-container">
					<TeamsList
						leaguesIds={this.props.leaguesIds}
						currentLeagueTableIndex={this.state.currentLeagueTableIndex}
					/>
    			</div>
    		</div>
    	);
    }
}