import React from "react";

import Tabs from "./tabs";
import Tab from "./tab";

import LeagueTable from "./leagueTable";

import Loading from "./loading";

import {getFootballData} from "../utils/getFootballData";

export default class TabPanel extends React.Component {
    constructor(props) {
        super(props);

        //leagueData is an array of objects.
        //Every object has fetched from Football API data
        this.state = {
            leagueData: undefined
        }

        //League Id points to a specific league in league tables in Football API 
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
        //If leagueData is underfined, display loading div
        if (!this.state.leagueData) {
            return <Loading />;
        }

        //If leagueData is not full (doesn't consist of all leagues), display loading div
        if (this.state.leagueData.length < this.leagueIds.length) {
            return <Loading />;
        }
        
        //If leagueData data isn't underfined and is full it can be displayed
        return (
            <Tabs>
                {/* Mapping through array of leagueData */}
                {this.state.leagueData.map((leagueData, index) => {
                    return (
                        // Passing new title for each tab using leagueCaption in each leagueData object
                        <Tab key={index} title={leagueData.leagueCaption}>
                            {/* Passing new leagueData for each tab content using leagueCaption in each leagueData object */}
                            <LeagueTable key={index} leagueData={leagueData.standing} />
                        </Tab>
                    )
                })}
            </Tabs>
        )
    }
}