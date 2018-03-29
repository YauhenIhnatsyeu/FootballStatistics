import React, { Component } from "react";

import Section from "Pages/teamPage/teamInfo/Section";

import FixturesSectionContainer from "Containers/FixturesSectionContainer";

export default class FixturesPage extends Component {
    render() {
        return (
            <React.Fragment>
                <Section title="Fixtures">
                    <FixturesSectionContainer />
                </Section>
                <Section title="Some stuff" />
            </React.Fragment>
        );
    }
}
