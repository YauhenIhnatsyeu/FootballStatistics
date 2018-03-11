import React from "react";

import Header from "./header";

import MainTable from "./main-table";
import MainTeams from "./main-teams";

import {getFootballData} from "../utils/getFootballData";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        //leagueData is an array of objects.
        //Every object has fetched from Football API data
        this.state = {
            leagueData: undefined
        }

        //League Id points to a specific league in the league tables in the Football API 
        this.leagueIds = [445, 449, 452, 455, 457];
        //For achieving rigth order of tabs and content rendering
        //current index is used to keep track of what tab is rendering now
        this.currentLeagueFetching = 0;
        this.fetchNextLeagueData(this.currentLeagueFetching);
    }

    //Fetches next league from Football API through imported function from utils
    fetchNextLeagueData = () => {
        getFootballData("LEAGUE", this.leagueIds[this.currentLeagueFetching], this.handleLeagueDataFetched)
    }

    //Is called when next league is fetched
    handleLeagueDataFetched = (leagueData) => {
        //If the data already exists in array, then just add to it new one
        if (this.state.leagueData) {
            this.setState({
                leagueData: [...this.state.leagueData, leagueData]
            });
        }
        //If array was empty, simply create new array with new data 
        else {
            this.setState({
                leagueData: [leagueData]
            });
        }
        //If all tabs were rendered, just leave the function and never go back
        if (this.currentLeagueFetching >= this.leagueIds.length - 1)
            return;
        //After new league was fetched we need to increment currentLeagueFetching
        this.currentLeagueFetching++;
        //and fetch new league
        this.fetchNextLeagueData(this.currentLeagueFetching);
    }

    render() {
        //If leagueData data isn't underfined and is full it can be displayed
        return (
            <React.Fragment>
                <Header />
                {/* Passing leagueData and how many leagues it should be to the Main~.
                    That way we don't disturb other components, like Header */}
                <MainTeams
                    leagueData={this.state.leagueData}
                    leaguesCount={this.leagueIds.length}
                />
            </React.Fragment>
        );
    }
}