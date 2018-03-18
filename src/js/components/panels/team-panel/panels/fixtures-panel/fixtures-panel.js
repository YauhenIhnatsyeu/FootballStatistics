import React from "react";

import {Section} from "../../../../team-info";

import SectionHeader from "../../../../section-header";
import FixturesSection from "./sections/fixtures-section";

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