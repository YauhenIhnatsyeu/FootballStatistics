import PropTypes from "prop-types";

import React from "react";

import TeamItemContainer from "Containers/TeamItemContainer";

import Loading from "Components/messages/Loading";
import Error from "Components/messages/Error";

import "./index.css";

export default class TeamsList extends React.Component {
    render() {
        this.props.getTeamsFromFavourites();

        if (this.props.fetchingError) {
            return <Error />;
        }

        if (!this.props.teams) {
            return <Loading />;
        }

        return (
            <div className="teams-list">
                {this.props.teams.map((team, index) => {
                    return (
                        <div className="teams-list__team-item-container" key={index}>
                            <TeamItemContainer team={team} />
                        </div>
                    );
                })}
            </div>
        );
    }
}

TeamsList.propTypes = {
    teams: PropTypes.arrayOf(PropTypes.object),
    fetchingError: PropTypes.bool,
    getTeamsFromFavourites: PropTypes.func.isRequired,
};

TeamsList.defaultProps = {
    teams: null,
    fetchingError: false,
};
