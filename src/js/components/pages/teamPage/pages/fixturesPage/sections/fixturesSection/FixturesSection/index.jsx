import React, { Component } from "react";

import PropTypes from "prop-types";

import Loading from "Components/messages/Loading";
import Error from "Components/messages/Error";

import itemsOnOnePageCount from "Constants/itemsOnOnePageCount";

import PagingControls from "Components/PagingControls";
import ItemsList from "Components/ItemsList";

import FixtureItem from "../FixtureItem";

import DateForms from "../DatesForm";

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
        this.props.updateFixturesPageIndex(pageIndex);
    }

    render() {
        if (this.props.fetchingErrorOccured) {
            return <Error />;
        }

        if (!this.props.fixtures) {
            return <Loading />;
        }

        const pagingControlsPagesCount =
            Math.ceil(this.props.fixtures.count / itemsOnOnePageCount);

        const pagingControls = (
            <PagingControls
                currentPageIndex={this.props.fixturesPageIndex}
                pagesCount={pagingControlsPagesCount}
                onPageChanged={this.handlePageChanged}
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

                {pagingControls}
                
                <ItemsList
                    items={this.props.fixtures.fixtures}
                    itemComponent={<FixtureItem />}
                    itemKey="fixture"
                    currentPageIndex={this.props.fixturesPageIndex}
                />

                {pagingControls}
            </React.Fragment>
        );
    }
}

FixturesSection.propTypes = {
    teamId: PropTypes.number.isRequired,
    fixtures: PropTypes.shape({
        count: PropTypes.number.isRequired,
        fixtures: PropTypes.arrayOf(PropTypes.object).isRequired,
    }),
    fixturesPageIndex: PropTypes.number.isRequired,
    fetchFixtures: PropTypes.func.isRequired,
    fetchingErrorOccured: PropTypes.bool.isRequired,
    updateFixturesPageIndex: PropTypes.func.isRequired,
};

FixturesSection.defaultProps = {
    fixtures: null,
};
