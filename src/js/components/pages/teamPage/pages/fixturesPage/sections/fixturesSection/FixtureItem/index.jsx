import React, { Component } from "react";

import PropTypes from "prop-types";

import "./index.css";

export default class FixtureItem extends Component {
    render() {
        return (
            <div className="item">
                <p>
                    <span className="fixture-item__home-team-name">{this.props.fixture.homeTeamName}</span>
                    <span className="fixture-item__away-team-name">{this.props.fixture.awayTeamName}</span>
                    <span className="fixture-item__goals-home-name">{this.props.fixture.result.goalsHomeTeam}</span>
                    {this.props.fixture.result.goalsAwayTeam}
                </p>
                <p>{this.props.fixture.date}</p>
            </div>
        );
    }
}

FixtureItem.propTypes = {
    fixture: PropTypes.shape({
        homeTeamName: PropTypes.string.isRequired,
        awayTeamName: PropTypes.string.isRequired,
        result: PropTypes.shape({
            goalsHomeTeam: PropTypes.number.isRequired,
            goalsAwayTeam: PropTypes.number.isRequired,
        }).isRequired,
        date: PropTypes.string.isRequired,
    }),
};

FixtureItem.defaultProps = {
    fixture: null,
};
