import React from "react";

import SectionHeader from "./section-header";

export class TeamInfo extends React.Component {
    render() {
        return (
            <div className="team-panel__info-container">
                {this.props.children}
            </div>
        );
    }   
}

export class Section extends React.Component {
    render() {
        return (
            <div className="team-panel__section">
                <SectionHeader title={this.props.title} />
                {this.props.children}
            </div>
        );
    }   
}