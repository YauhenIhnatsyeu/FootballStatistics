import React, { Component } from "react";

import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import extractIdFromUrl from "Utilities/extractIdFromUrl";

import Loading from "Components/messages/Loading";
import Error from "Components/messages/Error";

import leaguesData from "Constants/leaguesData";
import leagueTable from "Constants/leagueTable";

import createTeamPath from "Utilities/pathsCreators";

import "./index.css";

export default class LeagueTable extends Component {
    componentDidMount() {
        this.props.fetchLeague(leaguesData[this.props.leagueIndex].id);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.leagueIndex !== nextProps.leagueIndex) {
            this.props.fetchLeague(leaguesData[nextProps.leagueIndex].id);
        }
    }

    render() {
        if (this.props.leagueFetchingErrorOccured) {
            return <Error />;
        }

        if (!this.props.league) {
            return <Loading />;
        }

        return (
            <table className="league-table">
                <tbody>
                    <tr className="league-table__row league-table__row_header" key={0}>
                        {leagueTable.map((attribute, index) =>
                            (
                                <th className="league-table__col league-table__col_header" key={index}>
                                    {attribute.caption}
                                </th>
                            ))
                        }
                    </tr>

                    {this.props.league.standing.map((team, rowIndex) => {
                        const teamId = extractIdFromUrl(team._links.team.href);
                        const teamUrl = createTeamPath(teamId);
                        return (
                            <tr className="league-table__row" key={rowIndex + 1}>
                                {leagueTable.map((attribute, colIndex) =>
                                    (
                                        <td className="league-table__col" key={colIndex}>
                                            {attribute.property === "teamName"
                                                ? <Link to={teamUrl}>{team[attribute.property]}</Link>
                                                : team[attribute.property]
                                            }
                                        </td>
                                    ))
                                }
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}

LeagueTable.propTypes = {
    fetchLeague: PropTypes.func.isRequired,
    leagueFetchingErrorOccured: PropTypes.bool,
    league: PropTypes.shape({
        standing: PropTypes.arrayOf(PropTypes.shape({
            _link: PropTypes.shape({
                team: PropTypes.shape({
                    href: PropTypes.string,
                }).isRequired,
            }),
        })).isRequired,
    }),
    leagueIndex: PropTypes.number.isRequired,
};

LeagueTable.defaultProps = {
    leagueFetchingErrorOccured: false,
    league: PropTypes.shape({
        standing: PropTypes.arrayOf(PropTypes.shape({
            _link: null,
        })),
    }),
};
