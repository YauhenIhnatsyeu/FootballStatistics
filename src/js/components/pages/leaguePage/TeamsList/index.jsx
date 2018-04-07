import React, { Component } from "react";

import PropTypes from "prop-types";

import TeamItemContainer from "Containers/TeamItemContainer";

import Loading from "Components/messages/Loading";
import Error from "Components/messages/Error";

import "./index.css";

export default class TeamsList extends Component {
    componentDidMount() {
        this.props.getTeamsFromFavorites();
    }

    render() {
        if (this.props.teamsFetchingErrorOccured) {
            return <Error />;
        }

        if (!this.props.teams) {
            return <Loading />;
        }

        return (
            <div className="teams-list">
                {this.props.teams.map((team, index) =>
                    (
                        <div className="teams-list__team-item-container" key={index}>
                            <TeamItemContainer team={team} />
                        </div>
                    ))
                }
            </div>
        );
    }
}

TeamsList.propTypes = {
    teams: PropTypes.arrayOf(PropTypes.object),
    teamsFetchingErrorOccured: PropTypes.bool,
    getTeamsFromFavorites: PropTypes.func.isRequired,
};

TeamsList.defaultProps = {
    teams: null,
    teamsFetchingErrorOccured: false,
};
