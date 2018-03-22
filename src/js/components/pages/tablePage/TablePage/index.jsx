import React from "react";

import TabsContainer from "Containers/TabsContainer";
import Tab from "Components/tabs/Tab";

import LeagueTableContainer from "Containers/LeagueTableContainer";

import Loading from "Components/messages/Loading";
import Error from "Components/messages/Error";

export default class TablePage extends React.Component {
	constructor(props) {
		super(props);

		this.props.selectNewLeague(
			this.props.leaguesData.leaguesIds[this.props.currentLeagueIndex],
			this.props.currentLeagueIndex
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
				<TabsContainer>
					{this.props.leaguesData.leaguesTitles.map((tabTitle, index) => {
						return (
							<Tab key={index} title={tabTitle} />
						);
					})}
				</TabsContainer>

				<LeagueTableContainer />
			</React.Fragment>
    	);
    }
}