import React from "react";

import {createLeaguesTablesUrl} from "Utilities/fetchingUrlsCreators";

import Tabs from "Components/tabs/Tabs";
import Tab from "Components/tabs/Tab";

import LeagueTable from "../LeagueTable";

import Loading from "Components/messages/Loading";
import Error from "Components/messages/Error";

export default class TablePage extends React.Component {
	constructor(props) {
		super(props);

		this.leaguesTablesUrls = createLeaguesTablesUrl(this.props.app.leaguesIds);
		this.props.requestFetch(this.leaguesTablesUrls[this.props.tabs.currentTabIndex]);
	}

	handleTabClick = (tabIndex) => {
		this.props.requestFetch(this.leaguesTablesUrls[tabIndex]);
		this.props.updateTabIndex(tabIndex);
	}
    
    render() {
    	if (this.props.tablePage.errorOccured) {
    		return <Error />;
    	}

    	if (!this.props.tablePage.leagueTable) {
    		return <Loading />;
    	}

    	return (
			<React.Fragment>
				<Tabs
					onTabClick={this.handleTabClick}
					defaultIndex={this.props.tabs.currentTabIndex} 
				>
					{this.props.app.leaguesTitles.map((tabTitle, index) => {
						return (
							<Tab key={index} title={tabTitle} />
						);
					})}
				</Tabs>

				<LeagueTable
					leagueTable={this.props.tablePage.leagueTable.standing}
				/>
			</React.Fragment>
    	);
    }
}