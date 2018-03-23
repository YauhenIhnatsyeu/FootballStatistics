import React from "react";

import SectionHeader from "Components/SectionHeader";
import LeagueSelectorContainer from "Containers/LeagueSelectorContainer";
import TeamsListContainer from "Containers/TeamsListContainer";

import Loading from "Components/messages/Loading";
import Error from "Components/messages/Error";

import "./index.css";

export default class LeaguePage extends React.Component {
    render() {
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