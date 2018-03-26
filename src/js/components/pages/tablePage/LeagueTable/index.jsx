import React from "react";

import {Link} from "react-router-dom";

import extractTeamIdFromUrl from "Utilities/extractTeamIdFromUrl";

import Loading from "Components/messages/Loading";
import Error from "Components/messages/Error";

import "./index.css";

export default class LeagueTable extends React.Component {
    constructor(props) {
        super(props);

        this.header = ["Position", "Team", "G", "W", "D", "L", "GS", "GC", "P"];
        this.leagueProperties =
            ["position", "teamName", "playedGames", "wins", "draws", "losses", "goals", "goalsAgainst", "points"];
        
        this.props.fetchLeague(
            this.props.leaguesData.leaguesIds[this.props.leagueIndex]
        )
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.leagueIndex !== nextProps.leagueIndex) {
            this.props.fetchLeague(
                this.props.leaguesData.leaguesIds[nextProps.leagueIndex]
            )
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

                    {this.props.leaguesData.league.standing.map((team, index) => {
                        const teamId = extractTeamIdFromUrl(team._links.team.href);
                        const teamUrl = "/team/" + teamId;
                        return (
                            <tr className="league-table__row" key={index + 1}>
                                {this.leagueProperties.map((teamProperty, index) => {
                                    return (
                                        <td className="league-table__col" key={index}>
                                            {teamProperty === "teamName" ?
                                                //If current property is teamName, display it as a link
                                                <Link to={teamUrl}>{team[teamProperty]}</Link> :
                                                //if any other, display it as usual
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