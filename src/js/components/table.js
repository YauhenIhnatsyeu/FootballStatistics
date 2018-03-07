import React from "react";

export default class Table extends React.Component {
    render() {
        return (
            <table className="table">
                <tbody>
                    {/* First we need to render a heading row */}
                    {this.props.content.slice(0, 1).map((row, index) => {
                        return (
                        <tr className="table__row table__row_header" key={index}>
                            {row.map((col, index) => {
                                return (
                                <th className="table__col table__col_header" key={index}>
                                    {col}
                                </th>
                            )})}
                        </tr>
                    )})}
                    {/* Then the remaining body */}
                    {this.props.content.slice(1).map((row, index) => {
                        return (
                        <tr className="table__row" key={index}>
                            {row.map((col, index) => {
                                return (
                                <td className="table__col" key={index}>
                                    {col}
                                </td>
                            )})}
                        </tr>
                    )})}
                </tbody>
            </table>
        );
    }
}