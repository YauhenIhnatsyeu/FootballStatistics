import React from "react";

import Section from "Panels/teamPanel/teamInfo/Section";

import SectionHeader from "Components/SectionHeader";
import PlayersSection from "../sections/playersSection/PlayersSection";

export default class PlayersPanel extends React.Component {
    render() {
		//If shortName is null or undefined, use hashtag "#football"
		const hashtag = this.props.team.shortName ? 
			this.props.team.shortName.toLowerCase() : "football";
        
        return (
            <React.Fragment>
                <Section title="Players">
                    <PlayersSection team={this.props.team} />
                </Section>
                <Section title={"Tweets for tag #" + hashtag}>
                    
                </Section>
            </React.Fragment>
        );
    }   
}