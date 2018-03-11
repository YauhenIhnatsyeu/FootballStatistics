import React from "react";

import {fetchLeaguesData} from "../utils/FootballDataReceiver";

import PageHeader from "./page-header";
import LeagueSelector from "./league-selector";

import TeamsList from "./teams-list";

import Loading from "./loading";

export default class LeaguePanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            leaguesData: undefined,
            currentLeagueIndex: 0
        }

        fetchLeaguesData(this.props.leaguesIds, this.handleLeagueDataFetched);
    }

    //Is called when all leagues are fetched
    handleLeagueDataFetched = (leaguesData) => {
        //console.log(leaguesData);
        this.setState({
            leaguesData: leaguesData,
            //currentLeagueIndex: this.state.currentLeagueIndex
        });
    }

    handleChange = (event) => {
        let newIndex = 0;
        for (let i = 1; i < this.state.leaguesData.length; i++ ) {
            if (this.state.leaguesData[i].leagueCaption === event.target.value) {
                newIndex = i;
            }
        }
        this.setState({
            currentLeagueIndex: newIndex
        })
    }

    render() {
        //If leaguesData is underfined, display loading div
        if (!this.state.leaguesData) {
            return <Loading />;
        }
        console.log(this.state.leaguesData[this.state.currentLeagueIndex].standing);
        //If leaguesData data isn't underfined it can be displayed
        return (
            <div className="main__league-panel-container">
                {/* Passing title of current league caption to the PageHeader */}
                <PageHeader 
                    title={this.state.leaguesData[this.state.currentLeagueIndex].leagueCaption}
                />

                <LeagueSelector
                    //Mapping through leagues data and passing league titles to options
                    options={this.state.leaguesData.map((leagueData) => {
                        return leagueData.leagueCaption
                    })}

                    onChange={(event) => this.handleChange(event)}

                    //Passing title of current league to the default value
                    default={this.state.leaguesData[this.state.currentLeagueIndex].leagueCaption}
                />

                <TeamsList leagueData={this.state.leaguesData[this.state.currentLeagueIndex].standing} />
            </div>
        );
    }
}