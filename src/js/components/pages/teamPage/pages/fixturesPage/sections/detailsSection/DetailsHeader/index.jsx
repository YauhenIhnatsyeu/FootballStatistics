import React from "react";

import PropTypes from "prop-types";

import { formatDate } from "Utilities/formatDate";

import "./index.css";

export default class DetailsHeader extends React.Component {
    render() {
        return (
            <div className="item details-header">
                <div className="details-header__header">
                    <p>
                        {this.props.head2Head.fixture.homeTeamName}
                        {" - "}
                        {this.props.head2Head.fixture.awayTeamName}
                        {this.props.head2Head.fixture.status === "FINISHED" &&
                            (` ${this.props.head2Head.fixture.result.goalsHomeTeam}` +
                            ` - ${this.props.head2Head.fixture.result.goalsAwayTeam}`)
                        }
                    </p>
                    <p>Date: {formatDate(this.props.head2Head.fixture.date)}</p>
                </div>
                <div className="details-header__statistics">
                    <span className="details-header__statistics-title">
                        Statistics:
                    </span>
                    <p>
                        {this.props.head2Head.fixture.homeTeamName}
                        {" wins: "}
                        {this.props.head2Head.head2head.homeTeamWins}
                    </p>
                    <p>
                        {this.props.head2Head.fixture.awayTeamName}
                        {" wins: "}
                        {this.props.head2Head.head2head.awayTeamWins}
                    </p>
                    <p>
                        {"Draws: "}
                        {this.props.head2Head.head2head.draws}
                    </p>
                </div>
            </div>
        );
    }
}

DetailsHeader.propTypes = {
    head2Head: PropTypes.shape({
        head2head: PropTypes.shape({
            fixtures: PropTypes.arrayOf(PropTypes.object).isRequired,
        }).isRequired,
    }),
};

DetailsHeader.defaultProps = {
    head2Head: null,
};
