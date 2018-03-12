import React from "react";

import {fetchLeaguesTablesData} from "../utils/FootballDataReceiver";

import Tabs from "./tabs";
import Tab from "./tab";

import LeagueTable from "./league-table";

import Loading from "./loading";

export default class TabPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            leaguesTables: undefined
        }

        //Fetch leagues tables data from Football API
        fetchLeaguesTablesData(this.props.leaguesIds, this.handleleagueFetched);
    }

    //Is called when all leagues tables are fetched
    handleleagueFetched = (leaguesTables) => {
        this.setState({
            leaguesTables: leaguesTables
        });
    }
    
    render() {
        //If leaguesTables is underfined, display loading div
        if (!this.state.leaguesTables) {
            return <Loading />;
        }

        //If leaguesTables isn't underfined it can be displayed
        return (
            <Tabs>
                {/* Mapping through array of leaguesTables */}
                {this.state.leaguesTables.map((leagueTable, index) => {
                    return (
                        // Passing new title for each tab using leagueCaption in each leaguesTables object
                        <Tab key={index} title={leagueTable.leagueCaption}>
                            {/* Passing new league for each tab content using leagueCaption in each league object */}
                            <LeagueTable key={index} leagueTable={leagueTable.standing} />
                        </Tab>
                    )
                })}
            </Tabs>
        )
    }
}