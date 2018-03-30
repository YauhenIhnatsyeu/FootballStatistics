import React from "react";

import PropTypes from "prop-types";

import ItemList from "Components/ItemsList";

import FixtureItem from "Pages/teamPage/pages/fixturesPage/FixtureItem";

export default class DetailsSection extends React.Component {
    getSameTeamsFixtures = () => {
        const currentFixture = this.props.fixtures[this.props.fixtureIndex];

        const newFixtures = [];

        for (let i = this.props.fixtures.length - 1; i >= 0; i -= 1) {
            if (this.areTeamsTheSameInFixtures(currentFixture, this.props.fixtures[i])) {
                newFixtures.push(this.props.fixtures[i]);
            }
            if (newFixtures.length >= 10) {
                break;
            }
        }

        return newFixtures;
    }

    areTeamsTheSameInFixtures = (f1, f2) =>
        (f1.homeTeamName === f2.homeTeamName && f1.awayTeamName === f2.awayTeamName)
        ||
        (f1.homeTeamName === f2.awayTeamName && f1.awayTeamName === f2.homeTeamName);

    render() {
        const fixtureItem = (
            <FixtureItem
                currentFixtureId={this.props.fixtures[this.props.fixtureIndex].id}
            />
        );

        return (
            <ItemList
                items={this.getSameTeamsFixtures()}
                itemComponent={fixtureItem}
                itemKey="fixture"
            />
        );
    }
}

DetailsSection.propTypes = {
    fixtures: PropTypes.arrayOf(PropTypes.object).isRequired,
    fixtureIndex: PropTypes.number.isRequired,
};
