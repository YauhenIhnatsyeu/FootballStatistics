import React from "react";

import {fetchLeaguesTeamsData} from "../utils/FootballDataReceiver";

import TeamsItem from "./teams-item";

import Loading from "./loading";

export default class TeamsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            leaguesTeams: undefined
        };

        //Fetch leagues teams data from Football API
        fetchLeaguesTeamsData(this.props.leaguesIds, this.handleleagueTableTeamsFetched);
    }
    
    //Is called when all leagues teams are fetched
    handleleagueTableTeamsFetched = (leaguesTeams) => {
        this.setState({
            leaguesTeams: leaguesTeams,
        });
    }

    render() {
        //If leaguesTeams is underfined, display loading div
        if (!this.state.leaguesTeams) {
            return <Loading />;
        }

        //If leaguesTeams isn't underfined it can be displayed
        return (
            <div className="main__teams-list-container">
                <div className="teams-list">
                    {this.state.leaguesTeams[this.props.currentLeagueTableIndex].teams.map((team, index) => {
                        return (
                            <TeamsItem team={team} key={index} />
                        )
                    })}
                </div>
            </div>
        );
    }
}