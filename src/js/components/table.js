import React from "react";

export default class Table extends React.Component {
    render() {
        return (
            <table className="table">
                {this.props.content.slice(0, 1).map((row) => {
                    return (
                    <tr>
                        {row.map((col) => {
                            return (
                            <th>
                                {col}
                            </th>
                        )})}
                    </tr>
                )})}
                {this.props.content.slice(1).map((row) => {
                    return (
                    <tr>
                        {row.map((col) => {
                            return (
                            <td>
                                {col}
                            </td>
                        )})}
                    </tr>
                )})}
            </table>
        );
    }
}