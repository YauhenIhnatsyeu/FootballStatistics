import React, { Component } from "react";

import PropTypes from "prop-types";

import Item from "Components/Item";

import { formatDate } from "Utilities/castDate";

import "./index.css";

export default class FixtureItem extends Component {
    handleClick = () => {
        if (this.props.onClick) {
            this.props.onClick(this.props.fixture.id);
        }
    }

    render() {
        const style = this.props.onClick
            ? "fixture-item fixture-item_clickable"
            : "fixture-item";

        return (
            <Item isCurrent={this.props.currentFixtureId === this.props.fixture.id}>
                <div
                    className={style}
                    onClick={this.handleClick}
                    onKeyDown={this.handleClick}
                    role="link"
                    tabIndex="0"
                >
                    <p>
                        {this.props.fixture.homeTeamName}
                        {" - "}
                        {this.props.fixture.awayTeamName}
                        {this.props.fixture.status === "FINISHED" &&
                            (` ${this.props.fixture.result.goalsHomeTeam}` +
                            ` - ${this.props.fixture.result.goalsAwayTeam}`)
                        }
                    </p>
                    <p>Date: {formatDate(this.props.fixture.date)}</p>
                </div>
            </Item>
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
        status: PropTypes.string,
        date: PropTypes.string,
    }),
    currentFixtureId: PropTypes.number.isRequired,
    onClick: PropTypes.func,
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
        status: null,
        date: null,
    },
    onClick: null,
};
