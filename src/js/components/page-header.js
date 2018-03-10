import React from "react";

export default class MainTeams extends React.Component {
    render() {
        return (
            <div className="page-header">
                <h1 className="page-header__title">
                    {this.props.title}
                </h1>
            </div>
        );
    }
}