import React from "react";

import PropTypes from "prop-types";

import Item from "Components/Item";

import { formatDate } from "Utilities/formatDate";

import "./index.css";

export default class DetailsHeader extends React.Component {
    render() {
        const { info, fixture } = this.props.head2Head;

        return (
            <Item>
                <div className="details-header">
                    <div className="details-header__header">
                        <p>
                            {fixture.homeTeamName}
                            {" - "}
                            {fixture.awayTeamName}
                            {fixture.status === "FINISHED" &&
                                (` ${fixture.result.goalsHomeTeam}` +
                                ` - ${fixture.result.goalsAwayTeam}`)
                            }
                        </p>
                        <p>Date: {formatDate(fixture.date)}</p>
                    </div>
                    <div className="details-header__statistics">
                        <span className="details-header__statistics-title">
                            Statistics:
                        </span>
                        <p>
                            {fixture.homeTeamName}
                            {" wins: "}
                            {info.homeTeamWins}
                        </p>
                        <p>
                            {fixture.awayTeamName}
                            {" wins: "}
                            {info.awayTeamWins}
                        </p>
                        <p>
                            {"Draws: "}
                            {info.draws}
                        </p>
                    </div>
                </div>
            </Item>
        );
    }
}

DetailsHeader.propTypes = {
    head2Head: PropTypes.shape({
        fixture: PropTypes.shape({
            homeTeamName: PropTypes.string.isRequired,
            awayTeamName: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired,
            result: PropTypes.shape({
                goalsHomeTeam: PropTypes.number,
                goalsAwayTeam: PropTypes.number,
            }).isRequired,
            date: PropTypes.string.isRequired,
        }).isRequired,
        info: PropTypes.shape({}).isRequired,
    }),
};

DetailsHeader.defaultProps = {
    head2Head: null,
};
