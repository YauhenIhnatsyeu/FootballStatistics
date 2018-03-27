import React from "react";

import PagingControls from "Components/PagingControls";
import DateForms from "../DatesForm";

import "./index.css";

export default class FixturesSection extends React.Component {
    handleFromDateChange = (date) => {

    }

    handleToDateChange = (date) => {

    }

    render() {
        // const pagingControls = new PagingControls({
        //     currentPageIndex: this.props.currentPageIndex,
        //     pagesCount: pagingControlsPagesCount,
        //     updateSelectedOptionIndex: this.props.updateSelectedOptionIndex,
        // });

        return (
            <React.Fragment>
                <div className="item fixture-section__dates-form-container">
                    <DateForms
                        onFromDateChange={this.handleFromDateChange}
                        onToDateChange={this.handleToDateChange}
                    />

                </div>
            </React.Fragment>
        );
    }
}
