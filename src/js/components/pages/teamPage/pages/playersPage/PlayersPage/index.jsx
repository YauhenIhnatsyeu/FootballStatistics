import React from "react";

import Section from "Pages/teamPage/teamInfo/Section";

import SectionHeader from "Components/SectionHeader";
import PlayersSectionContainer from "Containers/PlayersSectionContainer";

export default class PlayersPage extends React.Component {
    render() {
        //If shortName is null or undefined, use hashtag "#football"
        const hashtag = this.props.team.shortName ? 
            this.props.team.shortName.toLowerCase() : "football";
        
        return (
            <React.Fragment>
                <Section title="Players">
                    <PlayersSectionContainer />
                </Section>
                <Section title={"Tweets for tag #" + hashtag}>
                    
                </Section>
            </React.Fragment>
        );
    }   
}