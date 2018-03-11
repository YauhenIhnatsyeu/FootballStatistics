import React from "react";

import LeaguePanel from "./league-panel";

export default class MainTeams extends React.Component {
    render() {
        return (
            <main>
                <div className="main__inner-container wrapper">
                    <LeaguePanel leaguesData={this.props.leaguesData} />
                </div>
            </main>
        );
    }
}