import React from "react";

import {fetchLeaguesData} from "../utils/FootballDataReceiver";

import Tabs from "./tabs";
import Tab from "./tab";

import LeagueTable from "./league-table";

import Loading from "./loading";

export default class TabPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            leaguesData: undefined
        }

        fetchLeaguesData(this.props.leaguesIds, this.handleLeagueDataFetched);
    }

    //Is called when all leagues are fetched
    handleLeagueDataFetched = (leaguesData) => {
        this.setState({
            leaguesData: leaguesData
        });
    }
    
    render() {
        //If leaguesData is underfined, display loading div
        if (!this.state.leaguesData) {
            return <Loading />;
        }

        //If leaguesData data isn't underfined it can be displayed
        return (
            <Tabs>
                {/* Mapping through array of leaguesData */}
                {this.state.leaguesData.map((leagueData, index) => {
                    return (
                        // Passing new title for each tab using leagueCaption in each leaguesData object
                        <Tab key={index} title={leagueData.leagueCaption}>
                            {/* Passing new leagueData for each tab content using leagueCaption in each leagueData object */}
                            <LeagueTable key={index} leaguesData={leagueData.standing} />
                        </Tab>
                    )
                })}
            </Tabs>
        )
    }
}