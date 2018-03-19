import React from "react";

import {fetchTeamData} from "Utilities/FootballDataReceiver";

import TeamInfo from "../teamInfo/TeamInfo";

import TeamItemForHeader from "../TeamItemForHeader";
import PlayersPanel from "../panels/playersPanel/PlayersPanel";
import FixturesPanel from "../panels/fixturesPanel/FixturesPanel";

import Loading from "Components/messages/Loading";
import Error from "Components/messages/Error";

import "./index.css";

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
    
    handleTeamLoaded = (team) => {
    	this.setState({
    		team: team,
		});
    }

    handleTeamError = () => {
    	this.setState({
    		errorOccured: true
		});
	}
	
	handleTabClick = (tabIndex) => {
		this.setState({
			currentTabsIndex: tabIndex
		});
	}
	
	render() {
    	if (this.state.errorOccured) {
    		return <Error />;
    	}
        
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