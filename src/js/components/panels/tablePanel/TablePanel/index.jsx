import React from "react";

import {fetchLeaguesTablesData} from "Utilities/FootballDataReceiver";

import Tabs from "Components/tabs/Tabs";
import Tab from "Components/tabs/Tab";

import LeagueTable from "../LeagueTable";

import Loading from "Components/messages/Loading";
import Error from "Components/messages/Error";

export default class TablePanel extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			leaguesTables: undefined,
			currentTabsIndex: 0,
			errorOccured: false,
		};

		fetchLeaguesTablesData(this.props.leaguesIds, this.handleLeaguesLoad, this.handleLeaguesError);
	}

    handleLeaguesLoad = (leaguesTables) => {
    	this.setState({
    		leaguesTables: leaguesTables
    	});
    }

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
    	if (this.state.errorOccured) {
    		return <Error />;
    	}

    	if (!this.state.leaguesTables) {
    		return <Loading />;
    	}

    	return (
			<React.Fragment>
				<Tabs
					onTabClick={this.handleTabClick}
					defaultIndex={this.state.currentTabsIndex} 
				>
					{this.state.leaguesTables.map((leagueTable, index) => {
						return (
							<Tab key={index} title={leagueTable.leagueCaption} />
						);
					})}
				</Tabs>
				<LeagueTable
					leagueTable={this.state.leaguesTables[this.state.currentTabsIndex].standing}
				/>
			</React.Fragment>
    	);
    }
}