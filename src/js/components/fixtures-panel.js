import React from "react";

import SectionHeader from "./section-header";
import FixturesSection from "./fixtures-section";

export default class PlayersPanel extends React.Component {
    render() {
		//If shortName is null or undefined, use hashtag "#football"
		const hashtag = this.props.team.shortName ? 
			this.props.team.shortName.toLowerCase() : "football";
        
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