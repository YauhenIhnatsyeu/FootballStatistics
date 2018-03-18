import React from "react";

import SectionHeader from "../../../../section-header";
import FixturesSection from "./sections/fixtures-section";

export default class FixturesPanel extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="team-panel__section">
                    <FixturesSection team={this.props.team} />
                </div>
                <div className="team-panel__section">
                    {/* Taking tag from shortName of the team */}
                    <SectionHeader
                        title={"Some stuff"} 
                    />
                </div>
            </React.Fragment>
        );
    }   
}