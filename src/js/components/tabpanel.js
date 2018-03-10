import React from "react";

import Tabs from "./tabs";
import Tab from "./tab";

import Table from "./table";

import {getFootballData} from "../utils/getFootballData";

export default class TabPanel extends React.Component {
    constructor(props) {
        super(props);

        //footballData is an array of objects.
        //Every object has fetched from Football API data
        this.state = {
            footballData: undefined
        }

        //League Id points to a specific league in league tables in Football API 
        this.leagueIds = [445, 449, 452, 455, 457];
        //For achieving rigth order of tabs and content rendering
        //current index is used to keep track of what tab is rendering now
        this.currentLeagueFetching = 0;
        this.fetchNextFootballData(this.currentLeagueFetching);
    }

    //Fetches next league from Football API through imported function from utils
    fetchNextFootballData = () => {
        getFootballData("LEAGUE", this.leagueIds[this.currentLeagueFetching], this.handleFootballDataFetched)
    }

    //Is called when next league is fetched
    handleFootballDataFetched = (footballData) => {
        //If the data already exists in array, then just add to it new one
        if (this.state.footballData) {
            this.setState({
                footballData: [...this.state.footballData, footballData]
            });
        }
        //If array was empty, simply create new array with new data 
        else {
            this.setState({
                footballData: [footballData]
            });
        }
        //If all tabs were rendered, just leave the function and never go back
        if (this.currentLeagueFetching >= this.leagueIds.length - 1)
            return;
        //After new league was fetched we need to increment currentLeagueFetching
        this.currentLeagueFetching++;
        //and fetch new league
        this.fetchNextFootballData(this.currentLeagueFetching);
    }

    render() {
        //If football data isn't underfined, it can be displayed
        if (this.state.footballData) {
            return (
                <Tabs>
                    {/* Mapping through array of footballData */}
                    {this.state.footballData.map((footballData, index) => {
                        return (
                            // Passing new title for each tab using leagueCaption in each footballData object
                            <Tab key={index} title={footballData.leagueCaption}>
                                {/* Passing new footballData for each tab content using leagueCaption in each footballData object */}
                                <Table key={index} footballData={footballData.standing} />
                            </Tab>
                        )
                    })}
                </Tabs>
            )
        }
        //If it is undefined, show loading div
        else {
            return (
                <div className="main__loading">
                    <p>Loading table...</p>
                    <p>Please wait...</p>
                </div>
            )
        }
    }
}