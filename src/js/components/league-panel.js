import React from "react";

import PageHeader from "./page-header";
import Selector from "./selector";

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
            <main>
                <div className="main__inner-container wrapper">
                    <PageHeader 
                        title={this.props.leagueData[this.state.currentLeagueIndex].leagueCaption}
                    />
                    <Selector
                        options={this.props.leagueData.map((leagueData) => {
                            return leagueData.leagueCaption
                        })}
                        default={this.props.leagueData[this.state.currentLeagueIndex].leagueCaption}
                    />
                </div>
            </main>
        );
    }
}