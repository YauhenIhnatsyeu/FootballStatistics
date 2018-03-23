import React from "react";

// import {fetchTeamData} from "Utilities/fetchFootballData";

import TeamInfo from "../teamInfo/TeamInfo";

import TeamItemForHeaderContainer from "Containers/TeamItemForHeaderContainer";
import PlayersPanel from "../pages/playersPage/PlayersPage";
import FixturesPanel from "../pages/fixturesPage/FixturesPage";

import Loading from "Components/messages/Loading";
import Error from "Components/messages/Error";

import "./index.css";

export default class TeamPage extends React.Component {
	constructor(props) {
		super(props);

		// this.state = {
		// 	team: undefined,
		// 	currentTabsIndex: 1,
		// 	errorOccured: false
		// }
		
		this.props.fetchTeam(this.props.teamId);
	}
    
    // handleTeamLoaded = (team) => {
    // 	this.setState({
    // 		team: team,
	// 	});
    // }

    // handleTeamError = () => {
    // 	this.setState({
    // 		errorOccured: true
	// 	});
	// }
	
	// handleTabClick = (tabIndex) => {
	// 	this.setState({
	// 		currentTabsIndex: tabIndex
	// 	});
	// }
	
	render() {
    	if (this.props.fetchingErrorOccured) {
    		return <Error />;
    	}
        
    	if (!this.props.currentTeam) {
    		return <Loading />;
		}

		return (
			<div className="team-panel">
				<div className="team-panel__team-item-for-header-container">
					<TeamItemForHeaderContainer 
						// team={this.props.currentTeam} 
						// onTabClick={this.handleTabClick}
						//defaultTabsIndex={this.state.currentTabsIndex}
					/>
				</div>
				{/* <div className="team-panel__info-container">
					{this.state.currentTabsIndex === 0 ?
						<PlayersPanel team={this.state.team} />
						:
						<FixturesPanel team={this.state.team} />
					}
				</div> */}
			</div>
		);
	}
}