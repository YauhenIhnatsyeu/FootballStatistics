import React from "react";

import Header from "./header";

import MainTable from "./main-table";
import MainTeams from "./main-teams";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        //leaguesData is an array of objects.
        //Every object has fetched from Football API data
        this.state = {
            leaguesData: undefined
        }

        //League Id points to a specific league in the league tables in the Football API 
        this.leaguesIds = [445, 449, 452, 455, 457];
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <MainTeams leaguesIds={this.leaguesIds} />
            </React.Fragment>
        );
    }
}