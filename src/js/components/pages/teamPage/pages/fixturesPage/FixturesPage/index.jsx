import React from "react";

import Section from "Pages/teamPage/teamInfo/Section";

import SectionHeader from "Components/SectionHeader";
import FixturesSection from "../sections/fixturesSection/FixturesSection";

export default class FixturesPanel extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Section title="Fixtures">
                    <FixturesSection />
                </Section>
                <Section title="Some stuff">
                </Section>
            </React.Fragment>
        );
    }   
}