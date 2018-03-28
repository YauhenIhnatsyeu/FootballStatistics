import React, { Component } from "react";

import Section from "Pages/teamPage/teamInfo/Section";

import FixturesSection from "../sections/fixturesSection/FixturesSection";

export default class FixturesPanel extends Component {
    render() {
        return (
            <React.Fragment>
                <Section title="Fixtures">
                    <FixturesSection />
                </Section>
                <Section title="Some stuff" />
            </React.Fragment>
        );
    }
}
