import React from "react";

import Section from "Panels/teamPanel/teamInfo/Section";

import SectionHeader from "Components/SectionHeader";
import FixturesSection from "../sections/fixturesSection/FixturesSection";

export default class FixturesPanel extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Section title="Fixtures">
                    <FixturesSection team={this.props.team} />
                </Section>
                <Section title="Some stuff">
                </Section>
            </React.Fragment>
        );
    }   
}