import React from "react";

import PageHeader from "./page-header";
import LeagueSelector from "./league-selector";

import TeamsList from "./teams-list";

import Loading from "./loading";

export default class LeaguePanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentLeagueIndex: 0
        }
    }

    render() {
        //If leaguesData is underfined, display loading div
        if (!this.props.leaguesData) {
            return <Loading />;
        }
        
        //If leaguesData data isn't underfined it can be displayed
        return (
            <div className="main__league-panel-container">
                {/* Passing title of current league to the PageHeader */}
                <PageHeader 
                    title={this.props.leaguesData[this.state.currentLeagueIndex].leagueCaption}
                />

                <div className="league-panel__legue-selector-container">
                    <LeagueSelector
                        //Mapping through leagues data and passing league titles to options
                        options={this.props.leaguesData.map((leagueData) => {
                            return leagueData.leagueCaption
                        })}
                        //Passing title of current league to the default value
                        default={this.props.leaguesData[this.state.currentLeagueIndex].leagueCaption}
                    />
                </div>

                <TeamsList leagueData={this.props.leaguesData[this.state.currentLeagueIndex].standing} />
            </div>
        );
    }
}