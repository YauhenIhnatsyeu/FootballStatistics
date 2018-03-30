import React, { Component } from "react";

import PropTypes from "prop-types";

import Loading from "Components/messages/Loading";
import Error from "Components/messages/Error";

import Section from "Pages/teamPage/teamInfo/Section";

import FixturesSection from "FixturesPageSections/fixturesSection/FixturesSection";
import DetailsSection from "FixturesPageSections/detailsSection/DetailsSection";

export default class FixturesPage extends Component {
    constructor(props) {
        super(props);

        this.props.fetchFixtures(this.props.teamId);
    }

    render() {
        if (this.props.fetchingErrorOccured) {
            return <Error />;
        }

        if (!this.props.fixtures) {
            return <Loading />;
        }

        return (
            <React.Fragment>
                <Section title="Fixtures">
                    <FixturesSection
                        fixtures={this.props.fixtures}
                        fixtureIndex={this.props.fixtureIndex}
                        fixturesPageIndex={this.props.fixturesPageIndex}
                        updateFixtureIndex={this.props.updateFixtureIndex}
                        updateFixturesPageIndex={this.props.updateFixturesPageIndex}
                    />
                </Section>
                <Section>
                    <DetailsSection
                        fixtures={this.props.fixtures}
                        fixtureIndex={this.props.fixtureIndex}
                    />
                </Section>
            </React.Fragment>
        );
    }
}

FixturesPage.propTypes = {
    teamId: PropTypes.number.isRequired,
    fixtures: PropTypes.arrayOf(PropTypes.object),
    fixtureIndex: PropTypes.number.isRequired,
    fixturesPageIndex: PropTypes.number.isRequired,
    fetchFixtures: PropTypes.func.isRequired,
    fetchingErrorOccured: PropTypes.bool.isRequired,
    updateFixtureIndex: PropTypes.func.isRequired,
    updateFixturesPageIndex: PropTypes.func.isRequired,
};

FixturesPage.defaultProps = {
    fixtures: null,
};
