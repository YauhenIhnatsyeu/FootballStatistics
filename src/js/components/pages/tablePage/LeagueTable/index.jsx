import React from "react";

import { Link } from "react-router-dom";

import extractTeamIdFromUrl from "Utilities/extractTeamIdFromUrl";

import PropTypes from "prop-types";

import Loading from "Components/messages/Loading";
import Error from "Components/messages/Error";

import "./index.css";

export default class LeagueTable extends React.Component {
    constructor(props) {
        super(props);

        this.header = ["Position", "Team", "G", "W", "D", "L", "GS", "GC", "P"];
        this.leagueProperties =
            ["position", "teamName", "playedGames", "wins", "draws", "losses",
                "goals", "goalsAgainst", "points"];

        this.props.fetchLeague(this.props.leaguesData.leaguesIds[this.props.leagueIndex]);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.leagueIndex !== nextProps.leagueIndex) {
            this.props.fetchLeague(this.props.leaguesData.leaguesIds[nextProps.leagueIndex]);
        }
    }

    render() {
        if (this.props.fetchingErrorOccured) {
            return <Error />;
        }

        if (!this.props.leaguesData.league) {
            return <Loading />;
        }

        return (
            <table className="league-table">
                <tbody>
                    <tr className="league-table__row league-table__row_header" key={0}>
                        {this.header.map((headerCaption, index) => {
                            return (
                                <th className="league-table__col league-table__col_header" key={index}>
                                    {headerCaption}
                                </th>
                            );
                        })}
                    </tr>

                    {this.props.leaguesData.league.standing.map((team, rowIndex) => {
                        const teamId = extractTeamIdFromUrl(team._links.team.href);
                        const teamUrl = `/team/${teamId}`;
                        return (
                            <tr className="league-table__row" key={rowIndex + 1}>
                                {this.leagueProperties.map((teamProperty, colIndex) => {
                                    return (
                                        <td className="league-table__col" key={colIndex}>
                                            {teamProperty === "teamName" ?
                                                <Link to={teamUrl}>{team[teamProperty]}</Link>
                                                :
                                                team[teamProperty]}
                                        </td>
                                    );
                                })}
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
    fetchingErrorOccured: PropTypes.bool,
    leaguesData: PropTypes.shape({
        leaguesIds: PropTypes.arrayOf(PropTypes.number).isRequired,
        league: PropTypes.shape({
            standing: PropTypes.arrayOf(PropTypes.shape({
                _link: PropTypes.shape({
                    team: PropTypes.shape({
                        href: PropTypes.string,
                    }).isRequired,
                }),
            })).isRequired,
        }),
    }),
    leagueIndex: PropTypes.number.isRequired,
};

LeagueTable.defaultProps = {
    fetchingErrorOccured: false,
    leaguesData: PropTypes.shape({
        league: PropTypes.shape({
            standing: PropTypes.arrayOf(PropTypes.shape({
                _link: null,
            })),
        }),
    }),
};
