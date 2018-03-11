import React from "react";

import PageHeader from "./page-header";
import LeagueSelector from "./league-selector";

import Loading from "./loading";

export default class LeaguePanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentLeagueIndex: 0
        }
    }

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
            <div className="main__league-panel-container">
                {/* Passing title of current league to the PageHeader */}
                <PageHeader 
                    title={this.props.leagueData[this.state.currentLeagueIndex].leagueCaption}
                />
                <div className="league-panel__legue-selector-container">
                    <LeagueSelector
                        //Mapping through league data and passing league titles to options
                        options={this.props.leagueData.map((leagueData) => {
                            return leagueData.leagueCaption
                        })}
                        //Passing title of current league to the default value
                        default={this.props.leagueData[this.state.currentLeagueIndex].leagueCaption}
                    />
                </div>

            </div>
        );
    }
}