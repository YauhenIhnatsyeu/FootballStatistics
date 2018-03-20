import React from "react";

import {fetchLeaguesTablesData} from "Utilities/FootballDataReceiver";

import SectionHeader from "Components/SectionHeader";
import LeagueSelector from "../LeagueSelector";

import TeamsList from "../TeamsList";

import Loading from "Components/messages/Loading";
import Error from "Components/messages/Error";

import "./index.css";

export default class leagueTablePage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			leaguesTables: undefined,
			currentLeagueTableIndex: 0,
			errorOccured: false
		};

		fetchLeaguesTablesData(this.props.leaguesIds, this.handleLeaguesLoaded, this.handleLeaguesError);
	}

    handleLeaguesLoaded = (leaguesTables) => {
    	this.setState({
    		leaguesTables: leaguesTables,
    	});
    }

    handleLeaguesError = () => {
    	this.setState({
    		errorOccured: true
    	});
    }

    handleSelectorChange = (event) => {
    	let newIndex = 0;
    	for (let i = 1; i < this.state.leaguesTables.length; i++ ) {
    		if (this.state.leaguesTables[i].leagueCaption === event.target.value) {
    			newIndex = i;
    		}
    	}

		this.setState({
    		currentLeagueTableIndex: newIndex
    	});
    }

    render() {
    	if (this.state.errorOccured) {
    		return <Error />;
    	}

    	if (!this.state.leaguesTables) {
    		return <Loading />;
    	}

    	return (
			<React.Fragment>
    			<SectionHeader 
    				title={this.state.leaguesTables[this.state.currentLeagueTableIndex].leagueCaption}
    			/>

    			<LeagueSelector
    				options={this.state.leaguesTables.map((leagueTable) => {
    					return leagueTable.leagueCaption;
    				})}

    				onChange={(event) => this.handleSelectorChange(event)}

    				default={this.state.leaguesTables[this.state.currentLeagueTableIndex].leagueCaption}
    			/>
				
				<div className="league-panel__teams-list-container">
					<TeamsList
						leaguesIds={this.props.leaguesIds}
						currentLeagueTableIndex={this.state.currentLeagueTableIndex}
					/>
    			</div>
			</React.Fragment>
    	);
    }
}