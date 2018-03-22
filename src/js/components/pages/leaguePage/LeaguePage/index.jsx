import React from "react";

//import {fetchUrls} from "Utilities/fetchUrls";

import SectionHeader from "Components/SectionHeader";
import LeagueSelectorContainer from "Containers/LeagueSelectorContainer";
import TeamsListContainer from "Containers/TeamsListContainer";

// import TeamsList from "../TeamsList";

import Loading from "Components/messages/Loading";
import Error from "Components/messages/Error";

import "./index.css";

export default class LeaguePage extends React.Component {
	constructor(props) {
		super(props);

		this.props.selectNewLeague(
			this.props.leaguesData.leaguesIds[this.props.currentLeagueIndex],
			this.props.currentLeagueIndex
		);

		this.props.selectNewTeams(
			this.props.leaguesData.leaguesIds[this.props.currentLeagueIndex]
		)
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
    			<SectionHeader 
    				title={this.props.leaguesData.leaguesTitles[this.props.currentLeagueIndex]}
    			/>

				<div className="league-panel__legue-selector-container">
    				<LeagueSelectorContainer />
				</div>
				
				<div className="league-panel__teams-list-container">
					<TeamsListContainer />
				</div>
			</React.Fragment>
    	);
    }
}