import React from "react";

// import {fetchLeaguesTablesData} from "Utilities/fetchFootballData";

import Tabs from "Components/tabs/Tabs";
import Tab from "Components/tabs/Tab";

import LeagueTable from "../LeagueTable";

import Loading from "Components/messages/Loading";
import Error from "Components/messages/Error";

export default class TablePage extends React.Component {
	constructor(props) {
		super(props);

		const leagueUrls = this.props.app.leaguesIds.map((leagueId) => {
			return "http://api.football-data.org/v1/competitions/"
				+ leagueId +"/leagueTable";
		});

		this.props.requestFetch(leagueUrls);
	}

	handleTabClick = (tabIndex) => {
		this.props.updateTabIndex(tabIndex);
	}
    
    render() {
		// console.log("Render")
    	if (this.props.tablePage.errorOccured) {
    		return <Error />;
    	}

    	if (!this.props.tablePage.leaguesTables) {
    		return <Loading />;
    	}

    	return (
			<React.Fragment>
				<Tabs
					onTabClick={this.handleTabClick}
					defaultIndex={this.props.tabs.currentTabIndex} 
				>
					{this.props.tablePage.leaguesTables.map((leaguesTables, index) => {
						return (
							<Tab key={index} title={leaguesTables.leagueCaption} />
						);
					})}
				</Tabs>
				<LeagueTable
					leagueTable={this.props.tablePage.leaguesTables[this.props.tabs.currentTabIndex].standing}
				/>
			</React.Fragment>
    	);
    }
}