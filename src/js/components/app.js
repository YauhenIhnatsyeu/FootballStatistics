import React from "react";

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
  } from 'react-router-dom';

import Header from "./header";

import {MainTable, MainTeams, MainTeam} from "./main";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        //leagueTable Id points to a specific leagueTable in the leagueTable tables in the Football API 
        this.leaguesIds = [445, 452, 455, 456, 450];
    }

    render() {
        const mainTable = <MainTable leaguesIds={this.leaguesIds} />;
        const mainTeams = <MainTeams leaguesIds={this.leaguesIds} />;
        return (
            <React.Fragment>
                <Router>
                    <React.Fragment>
                        <Header />
                        <Switch>
                            <Route path="/table" render={() => mainTable} />
                            <Route path="/teams" render={() => mainTeams} />
                            <Route path="/team/:id" render={() => <MainTeam />} />
                            <Redirect to="/table" />
                        </Switch>
                    </React.Fragment>
                </Router>
            </React.Fragment>
        );
    }
}