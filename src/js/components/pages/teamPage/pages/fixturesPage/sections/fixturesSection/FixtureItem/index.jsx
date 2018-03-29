import React, { Component } from "react";

import PropTypes from "prop-types";

import { formatDate } from "Utilities/formatDate";

import "./index.css";

export default class FixtureItem extends Component {
    render() {
        const style = this.props.currentFixtureId === this.props.fixture.id ?
            "item item_current fixture-item"
            :
            "item fixture-item";

        return (
            <div className={style} onClick={() => this.props.onClick(this.props.fixture.id)}>
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
        id: PropTypes.number,
        homeTeamName: PropTypes.string,
        awayTeamName: PropTypes.string,
        result: PropTypes.shape({
            goalsHomeTeam: PropTypes.number,
            goalsAwayTeam: PropTypes.number,
        }),
        date: PropTypes.string,
    }),
    currentFixtureId: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
};

FixtureItem.defaultProps = {
    fixture: {
        id: null,
        homeTeamName: null,
        awayTeamName: null,
        result: {
            goalsHomeTeam: null,
            goalsAwayTeam: null,
        },
        date: null,
    },
};
