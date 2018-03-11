import React from "react";

export default class LeagueTable extends React.Component {
    constructor(props) {
        super(props);

        //The values of columns in first row
        this.header = ["Position", "Team", "G", "W", "D", "L", "GS", "GC", "P"];
        //The values of leaguesData object properties for each column in each row
        this.leagueProperties =
            ["position", "teamName", "playedGames", "wins", "draws", "losses", "goals", "goalsAgainst", "points"];
    }

    render() {
        return (
            <table className="table">
                <tbody>
                    {/* First, the header is rendering */}
                    <tr className="table__row table__row_header" key={0}>
                        {this.header.map((col, index) => {
                            return (
                                <th className="table__col table__col_header" key={index}>
                                    {col}
                                </th>
                            )
                        })}
                    </tr>

                    {/* Then, remaining body is rendering */}
                    {this.props.leaguesData.map((row, index) => {
                        return (
                            <tr className="table__row" key={index + 1}>
                                {this.leagueProperties.map((col, index) => {
                                    return (
                                        <td className="table__col" key={index}>
                                            {/* row is current leagueData object
                                                col is its property defined in leaguesProperties array */}
                                            {col === "teamName" ?
                                                //If current property is teamName, display it as a link
                                                <a href="#">{row[col]}</a> :
                                                //if any other, display it as usual
                                                row[col]}
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