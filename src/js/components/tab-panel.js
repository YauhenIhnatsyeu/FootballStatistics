import React from "react";

import Tabs from "./tabs";
import Tab from "./tab";

import LeagueTable from "./leagueTable";

import Loading from "./loading";

export default class TabPanel extends React.Component {
    render() {
        //If leagueData is underfined, display loading div
        if (!this.props.leagueData) {
            return <Loading />;
        }

        //If leagueData is not full (doesn't consist of all leagues), display loading div
        if (this.props.leagueData.length < this.props.leaguesCount) {
            return <Loading />;
        }
        
        //If leagueData data isn't underfined and is full it can be displayed
        return (
            <Tabs>
                {/* Mapping through array of leagueData */}
                {this.props.leagueData.map((leagueData, index) => {
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