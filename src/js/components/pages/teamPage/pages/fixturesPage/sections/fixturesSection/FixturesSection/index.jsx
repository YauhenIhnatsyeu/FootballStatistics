import React, { Component } from "react";

import PropTypes from "prop-types";

import Loading from "Components/messages/Loading";
import Error from "Components/messages/Error";

import ItemsListWithPagingControls from "Components/ItemsListWithPagingControls";

import FixtureItem from "../FixtureItem";

import DateForms from "../DatesForm";

import itemsOnOnePageCount from "Constants/itemsOnOnePageCount";

import "./index.css";

export default class FixturesSection extends Component {
    constructor(props) {
        super(props);

        this.props.fetchFixtures(this.props.teamId);
    }

    handleFromDateChange = (date) => {

    }

    handleToDateChange = (date) => {

    }

    handlePageChanged = (pageIndex) => {
        this.props.updateFixtureIndex(pageIndex * itemsOnOnePageCount);

        this.props.updateFixturesPageIndex(pageIndex);
    }

    handleFixtureClick = fixtureId =>
        this.props.updateFixtureIndex(this.props.fixtures.findIndex(f => f.id === fixtureId))

    render() {
        if (this.props.fetchingErrorOccured) {
            return <Error />;
        }

        if (!this.props.fixtures) {
            return <Loading />;
        }

        const fixtureItem = (
            <FixtureItem
                currentFixtureId={this.props.fixtures[this.props.fixtureIndex].id}
                onClick={this.handleFixtureClick}
            />
        );

        return (
            <React.Fragment>
                <div className="item fixture-section__dates-form-container">
                    <DateForms
                        onFromDateChange={this.handleFromDateChange}
                        onToDateChange={this.handleToDateChange}
                    />
                </div>

                <ItemsListWithPagingControls
                    items={this.props.fixtures}
                    itemComponent={fixtureItem}
                    itemKey="fixture"
                    currentPageIndex={this.props.fixturesPageIndex}
                    onPageChanged={this.handlePageChanged}
                />
            </React.Fragment>
        );
    }
}

FixturesSection.propTypes = {
    teamId: PropTypes.number.isRequired,
    fixtures: PropTypes.arrayOf(PropTypes.object),
    fixtureIndex: PropTypes.number.isRequired,
    fixturesPageIndex: PropTypes.number.isRequired,
    fetchFixtures: PropTypes.func.isRequired,
    fetchingErrorOccured: PropTypes.bool.isRequired,
    updateFixtureIndex: PropTypes.func.isRequired,
    updateFixturesPageIndex: PropTypes.func.isRequired,
};

FixturesSection.defaultProps = {
    fixtures: null,
};
