import React from "react";

import {fetchTeamData} from "../../../utils/FootballDataReceiver";

import TeamItemForHeader from "./team-item-for-header";
import PlayersPanel from "./panels/players-panel/players-panel";
import FixturesPanel from "./panels/fixtures-panel/fixtures-panel";

import {Loading, Error} from "../../messages";

export default class TeamPanel extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			team: undefined,
			currentTabsIndex: 1,
			errorOccured: false
		}

		fetchTeamData(this.props.teamId, this.handleTeamLoaded, this.handleTeamError);
	}
    
    //Is called when team is fetched
    handleTeamLoaded = (team) => {
    	this.setState({
    		team: team,
		});
    }

    //Is called when error occurs while fetching a team
    handleTeamError = () => {
    	this.setState({
    		errorOccured: true
		});
	}
	
	handleTabClick = (tabIndex) => {
		//When one of the two tabs was clicked
		//currentTabsIndex is set to a new index
		this.setState({
			currentTabsIndex: tabIndex
		});
	}
	
	render() {
    	//If an error occured, show the message
    	if (this.state.errorOccured) {
    		return <Error />;
    	}
        
    	//If team is underfined, display loading div
    	if (!this.state.team) {
    		return <Loading />;
		}

		return (
			<div className="team-panel">
				<div className="team-panel__team-item-for-header-container">
					<TeamItemForHeader 
						team={this.state.team} 
						onTabClick={this.handleTabClick}
						defaultTabsIndex={this.state.currentTabsIndex}
					/>
				</div>
				<div className="team-panel__info-container">
					{/* If tab was switched, content will be switched too */}
					{this.state.currentTabsIndex === 0 ?
						<PlayersPanel team={this.state.team} />
						:
						<FixturesPanel team={this.state.team} />
					}
				</div>
			</div>
		);
	}
}