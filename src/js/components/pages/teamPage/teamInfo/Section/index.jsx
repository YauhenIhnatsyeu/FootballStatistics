import React from "react";

import SectionHeader from "Components/SectionHeader";

export default class Section extends React.Component {
    render() {
        return (
            <div className="team-panel__section">
                <SectionHeader title={this.props.title} />
                {this.props.children}
            </div>
        );
    }   
}