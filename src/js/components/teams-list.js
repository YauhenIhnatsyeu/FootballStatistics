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

        this.fetchNewTeamsData(this.props.leagueData);
    }

    //Is called when all teams are fetched
    handleTeamsDataFetched = (teamsData) => {
        this.setState({
            teamsData: teamsData
        });
    }

    fetchNewTeamsData = (leagueData) => {
        //Creating array of urls which will be provided to the fetch function
        const teamsUrls = leagueData.map((team) => {
            //Specific path from league team to itself in the Football API
            return team._links.team.href;
        });

        //Creating new object that will fetch teams data
        const fdr = new FootballDataReceiver(teamsUrls, this.handleTeamsDataFetched);
        fdr.fetch();
    }

    componentWillReceiveProps(nextProps) {
        this.fetchNewTeamsData(nextProps.leagueData);
    }

    render() {

        console.log("Rendered!");
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