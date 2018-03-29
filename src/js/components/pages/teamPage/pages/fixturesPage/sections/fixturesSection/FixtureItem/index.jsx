import React, { Component } from "react";

import PropTypes from "prop-types";

import { formatDate } from "Utilities/formatDate";

import "./index.css";

export default class FixtureItem extends Component {
    render() {
        return (
            <div className="item fixture-item">
                <p>
                    {this.props.fixture.homeTeamName}
                    {" - "}
                    {this.props.fixture.awayTeamName}
                    {" "}
                    {this.props.fixture.result.goalsHomeTeam}
                    {" - "}
                    {this.props.fixture.result.goalsAwayTeam}
                </p>
                <p>Date: {formatDate(this.props.fixture.date)}</p>
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
