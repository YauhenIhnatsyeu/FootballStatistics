import React from "react";

export default class TeamInfo extends React.Component {
    render() {
        return (
            <div className="team-panel__info-container">
                {this.props.children}
            </div>
        );
    }   
}