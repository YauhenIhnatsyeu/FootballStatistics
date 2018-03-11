import React from "react";

import LeaguePanel from "./league-panel";

export default class MainTeams extends React.Component {
    render() {
        return (
            <main>
                <div className="main__inner-container wrapper">
                    <LeaguePanel
                        leagueData={this.props.leagueData}
                        leaguesCount={this.props.leaguesCount}
                    />
                </div>
            </main>
        );
    }
}