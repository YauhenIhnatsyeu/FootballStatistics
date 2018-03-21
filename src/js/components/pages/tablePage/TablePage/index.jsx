import React from "react";

import {createLeaguesTablesUrl} from "Utilities/fetchingUrlsCreators";

// import Tabs from "Components/tabs/Tabs";
import TabsContainer from "Containers/TabsContainer";
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

	componentWillReceiveProps(nextProps) {
		if (this.props.tabs.currentTabIndex !== nextProps.tabs.currentTabIndex)
			this.props.requestFetch(this.leaguesTablesUrls[nextProps.tabs.currentTabIndex]);
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
				<TabsContainer
				>
					{this.props.app.leaguesTitles.map((tabTitle, index) => {
						return (
							<Tab key={index} title={tabTitle} />
						);
					})}
				</TabsContainer>

				<LeagueTable
					leagueTable={this.props.tablePage.leagueTable.standing}
				/>
			</React.Fragment>
    	);
    }
}