import React from "react";

export default class LeagueSelector extends React.Component {
    render() {
        return (
            <div className="selector">
                <select className="selector__select" defaultValue={this.props.default}>
                    {this.props.options.map((option, index) => {
                        return (
                            <option key={index}>
                                {option}
                            </option>
                        )
                    })}
                </select>
            </div>
        );
    }
}