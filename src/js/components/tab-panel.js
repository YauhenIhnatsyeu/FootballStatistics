import React from "react";

import Tabs from "./tabs";
import Tab from "./tab";

import LeagueTable from "./league-table";

import Loading from "./loading";

export default class TabPanel extends React.Component {
    render() {
        //If leaguesData is underfined, display loading div
        if (!this.props.leaguesData) {
            return <Loading />;
        }

        //If leaguesData data isn't underfined it can be displayed
        return (
            <Tabs>
                {/* Mapping through array of leaguesData */}
                {this.props.leaguesData.map((leagueData, index) => {
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