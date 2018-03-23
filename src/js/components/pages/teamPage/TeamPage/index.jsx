import React from "react";

// import {fetchTeamData} from "Utilities/fetchFootballData";

import TeamInfo from "../teamInfo/TeamInfo";

import TeamItemForHeaderContainer from "Containers/TeamItemForHeaderContainer";
import PlayersPageContainer from "Containers/PlayersPageContainer";
import FixturesPanel from "../pages/fixturesPage/FixturesPage";

import Loading from "Components/messages/Loading";
import Error from "Components/messages/Error";

import "./index.css";

export default class TeamPage extends React.Component {
	constructor(props) {
		super(props);

		this.props.fetchTeam(this.props.teamId);
	}
	
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
					<TeamItemForHeaderContainer  />
				</div>
				<div className="team-panel__info-container">
					{this.props.currentTeamPageIndex === 0 ?
						<PlayersPageContainer />
						:
						<FixturesPanel />
					}
				</div>
			</div>
		);
	}
}