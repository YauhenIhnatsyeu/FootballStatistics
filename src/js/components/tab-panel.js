import React from "react";

import {fetchLeaguesTablesData} from "../utils/FootballDataReceiver";

import {Tabs, Tab} from "./tabs";

import LeagueTable from "./league-table";

import {Loading, Error} from "./messages";

export default class TabPanel extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			leaguesTables: undefined,
			currentTabsIndex: 0,
			errorOccured: false,
		};

		//Fetch leagues tables data from Football API
		fetchLeaguesTablesData(this.props.leaguesIds, this.handleLeaguesLoad, this.handleLeaguesError);
	}

    //Is called when all leagues tables are fetched
    handleLeaguesLoad = (leaguesTables) => {
    	this.setState({
    		leaguesTables: leaguesTables
    	});
    }

    //Is called when error occurs while fetching leagues tables
    handleLeaguesError = () => {
		this.setState({
    		errorOccured: true
    	});
	}
	
	handleTabClick = (tabIndex) => {
		this.setState({
			currentTabsIndex: tabIndex
		})
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
			<React.Fragment>
				<Tabs
					onTabClick={this.handleTabClick}
					defaultIndex={this.state.currentTabsIndex} 
				>
					{/* Mapping through array of leaguesTables */}
					{this.state.leaguesTables.map((leagueTable, index) => {
						return (
						// Passing new title for each tab using leagueCaption in each leaguesTables object
							<Tab key={index} title={leagueTable.leagueCaption} />
						);
					})}
				</Tabs>
				{/* When tab changes, currentTabsIndex updates,
					and because of that league table updates too */}
				<LeagueTable
					leagueTable={this.state.leaguesTables[this.state.currentTabsIndex].standing}
				/>
			</React.Fragment>
    	);
    }
}