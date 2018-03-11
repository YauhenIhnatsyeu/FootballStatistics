import React from "react";

import FootballDataReceiver from "../utils/FootballDataReceiver";

import Header from "./header";

import MainTable from "./main-table";
import MainTeams from "./main-teams";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        //leaguesData is an array of objects.
        //Every object has fetched from Football API data
        this.state = {
            leaguesData: undefined
        }

        //League Id points to a specific league in the league tables in the Football API 
        this.leaguesIds = [445, 449, 452, 455, 457];

        //Creating array of urls which will be provided to fetch function
        //Leagues ids are included in these urls
        const leaguesUrls = this.leaguesIds.map((leagueId) => {
            return "http://api.football-data.org/v1/competitions/"
                        + leagueId +"/leagueTable"
        });

        //Creating new object that will fetch legues data
        const fdr = new FootballDataReceiver(leaguesUrls, this.handleLeagueDataFetched);
        fdr.fetch();
    }

    //Is called when all leagues are fetched
    handleLeagueDataFetched = (leaguesData) => {
        this.setState({
            leaguesData: leaguesData
        });
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                {/* Passing leaguesData to the Main~.
                    That way we don't disturb other components, like Header,
                    because only inside Main~ component leaguesData will be checked if it
                    is underfined, so Main~ component still can be rendered */}
                <MainTeams leaguesData={this.state.leaguesData} />
            </React.Fragment>
        );
    }
}