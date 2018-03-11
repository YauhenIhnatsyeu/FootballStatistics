import React from "react";

import FootballDataReceiver from "../utils/FootballDataReceiver";

import TeamsItem from "./teams-item";

import Loading from "./loading";

export default class TeamsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            teamsData: undefined
        };

        const teamsUrls = this.props.leagueData.map((team) => {
            return team._links.team.href;
        });

        const fdr = new FootballDataReceiver(teamsUrls, this.handleTeamsDataFetched);
        fdr.fetch();
    }

    handleTeamsDataFetched = (teamsData) => {
        this.setState({
            teamsData: teamsData
        });
    }

    render() {
        //If teamsData is underfined, display loading div
        if (!this.state.teamsData) {
            return <Loading />;
        }

        //If leaguesData data isn't underfined it can be displayed
        return (
            <div className="main__teams-list-container">
                <div className="teams-list">
                    {this.state.teamsData.map((team, index) => {
                        return (
                            <TeamsItem team={team} key={index} />
                        )
                    })}
                </div>
            </div>
        );
    }
}