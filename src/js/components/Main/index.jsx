import React, { Component } from "react";

import {
    Route,
    Switch,
    Redirect,
} from "react-router-dom";

import TablePageContainer from "Containers/TablePageContainer";
import LeaguePageContainer from "Containers/LeaguePageContainer";
import TeamPageContainer from "Containers/TeamPageContainer";

import routePaths from "Constants/routePaths";

import "./index.css";

export default class Main extends Component {
    render() {
        const tablePage = (
            <div className="main__page-container">
                <TablePageContainer />
            </div>
        );

        const leaguePage = (
            <div className="main__page-container">
                <LeaguePageContainer />
            </div>
        );

        const teamPage = props => (
            <div className="main__page-container">
                <TeamPageContainer teamId={+props.match.params.id} />
            </div>
        );

        return (
            <main>
                <div className="main__inner-container wrapper">
                    <Switch>
                        <Route path={routePaths.table} render={() => tablePage} />
                        <Route path={routePaths.teams} render={() => leaguePage} />
                        <Route path={routePaths.team} render={props => teamPage(props)} />
                        <Redirect to={routePaths.table} />
                    </Switch>
                </div>
            </main>
        );
    }
}
