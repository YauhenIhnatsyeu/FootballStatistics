import React from "react";

export default class Selector extends React.Component {
    render() {
        return (
            <div className="selector">
                <select defaultValue={this.props.default}>
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