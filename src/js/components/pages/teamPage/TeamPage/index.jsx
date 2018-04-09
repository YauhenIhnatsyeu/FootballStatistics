import React, { Component } from "react";

import PropTypes from "prop-types";

import {
    Route,
    Switch,
    Redirect,
} from "react-router-dom";

import routePaths from "Constants/routePaths";
import teamRoutes from "Constants/teamRoutes";
import teamRoutePaths from "Constants/teamRoutePaths";

import Loading from "Components/messages/Loading";
import Error from "Components/messages/Error";
import PlayersPageContainer from "Containers/PlayersPageContainer";
import FixturesPageContainer from "Containers/FixturesPageContainer";

import TeamItemForHeader from "../TeamItemForHeader";

import "./index.css";

export default class TeamPage extends Component {
    constructor(props) {
        super(props);

        this.teamId = +props.match.params.id;
    }

    componentDidMount() {
        this.props.fetchTeam(this.teamId);
    }

    render() {
        if (this.props.teamFetchingErrorOccured) {
            return <Error />;
        }

        if (!this.props.team) {
            return <Loading />;
        }

        return (
            <div className="team-page">
                <div className="team-page__team-item-for-header-container">
                    <TeamItemForHeader
                        team={this.props.team}
                        defaultTeamPageIndex={this.props.teamPageIndex}
                        updateTeamPageIndex={this.props.updateTeamPageIndex}
                        onTabClick={this.handleTabClick}
                    />
                </div>
                <div className="team-page__info-container">
                    <Switch>
                        {teamRoutes.map((route, index) => (
                            <Route
                                path={routePaths.team + route.path}
                                render={() => <route.component />}
                                key={index}
                            />
                        ))}

                        <Redirect to={`/team/${this.teamId}${teamRoutePaths.players}`} />
                    </Switch>
                </div>
            </div>
        );
    }
}


TeamPage.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
    fetchTeam: PropTypes.func.isRequired,
    teamFetchingErrorOccured: PropTypes.bool,
    team: PropTypes.shape({
        id: PropTypes.number,
        crestUrl: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        shortName: PropTypes.string.isRequired,
        squadMarketValue: PropTypes.string,
    }),
    teamPageIndex: PropTypes.number.isRequired,
    updateTeamPageIndex: PropTypes.func.isRequired,
};

TeamPage.defaultProps = {
    team: null,
    teamFetchingErrorOccured: false,
};
