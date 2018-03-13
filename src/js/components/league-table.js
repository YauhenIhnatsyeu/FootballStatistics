import React from "react";

import {Link} from 'react-router-dom';

import extractTeamIdFromUrl from "../utils/extractTeamIdFromUrl";

export default class LeagueTable extends React.Component {
    constructor(props) {
        super(props);

        //The values of teamPropertyumns in first row
        this.header = ["Position", "Team", "G", "W", "D", "L", "GS", "GC", "P"];
        //The values of leagues object properties for each teamPropertyumn in each row
        this.leagueProperties =
            ["position", "teamName", "playedGames", "wins", "draws", "losses", "goals", "goalsAgainst", "points"];
    }
    
    render() {
        return (
            <table className="table">
                <tbody>
                    {/* First, the header is rendering */}
                    <tr className="table__row table__row_header" key={0}>
                        {/* Map through header captions */}
                        {this.header.map((headerCaption, index) => {
                            return (
                                <th className="table__col table__col_header" key={index}>
                                    {headerCaption}
                                </th>
                            )
                        })}
                    </tr>

                    {/* Then, remaining body is rendering */}
                    {this.props.leagueTable.map((team, index) => {
                        //Extracting id from team url and store it
                        const teamId = extractTeamIdFromUrl(team._links.team.href);
                        const teamUrl = "/team/" + teamId;
                        return (
                            <tr className="table__row" key={index + 1}>
                                {this.leagueProperties.map((teamProperty, index) => {
                                    return (
                                        <td className="table__col" key={index}>
                                            {teamProperty === "teamName" ?
                                                //If current property is teamName, display it as a link
                                                <Link to={teamUrl}>{team[teamProperty]}</Link> :
                                                //if any other, display it as usual
                                                team[teamProperty]}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        );
    }
}