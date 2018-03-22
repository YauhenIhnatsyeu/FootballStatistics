import React from "react";

import Tabs from "Components/tabs/Tabs";
import Tab from "Components/tabs/Tab";

import LeagueTableContainer from "Containers/LeagueTableContainer";

import Loading from "Components/messages/Loading";
import Error from "Components/messages/Error";

export default class TablePage extends React.Component {
	constructor(props) {
		super(props);

		this.props.fetchLeague(
			this.props.leaguesData.leaguesIds[this.props.currentLeagueIndex],
			this.props.currentLeagueIndex
		);
	}

	handleTabClick = (tabIndex) => {
		this.props.fetchLeague(
			this.props.leaguesData.leaguesIds[tabIndex], 
			tabIndex
		);
	}

    render() {
    	if (this.props.fetchingErrorOccured) {
    		return <Error />;
    	}

    	if (!this.props.leaguesData.currentLeague) {
    		return <Loading />;
    	}

    	return (
			<React.Fragment>
				<Tabs
					currentTabIndex={this.props.currentLeagueIndex}
					onTabClick={this.handleTabClick}
				>
					{this.props.leaguesData.leaguesTitles.map((tabTitle, index) => {
						return (
							<Tab key={index} title={tabTitle} />
						);
					})}
				</Tabs>

				<LeagueTableContainer />
			</React.Fragment>
    	);
    }
}