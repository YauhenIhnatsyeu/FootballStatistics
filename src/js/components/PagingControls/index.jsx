import PropTypes from "prop-types";

import React from "react";

import "./index.css";

export default class PagingControls extends React.Component {
    getOptions = () => {
        const pages = [];
        for (let i = 1; i <= this.props.pagesCount; i += 1) {
            pages.push(i);
        }

        return (
            pages.map((page, index) =>
                (
                    <option key={index}>
                        {page}
                    </option>
                ))
        );
    }

    handleClick = (pageIndex) => {
        if (pageIndex < 0
            || pageIndex > this.props.pagesCount - 1
            || pageIndex === this.props.currentPageIndex) {
            return;
        }

        this.props.updateSelectedOptionIndex(
            "playersPagingControlsPageIndex",
            pageIndex,
        );
    }

    render() {
        return (
            <div className="paging-controls">
                <ul className="paging-controls__list">
                    <li className="paging-controls__control paging-controls__control_not-clickable">
                        <select
                            className="paging-controls__select"
                            onChange={event => this.handleClick(event.target.value - 1)}
                            value={this.props.currentPageIndex + 1}
                        >
                            {this.getOptions()}
                        </select>
                    </li>
                    <li
                        className="paging-controls__control"
                        onClick={() => this.handleClick(0)}
                    >
                        first
                    </li>
                    <li
                        className="paging-controls__control"
                        onClick={() => this.handleClick(this.props.currentPageIndex - 1)}
                    >
                        prev
                    </li>
                    <li className="paging-controls__control paging-controls__control_not-clickable">
                        {`${this.props.currentPageIndex + 1}/${this.props.pagesCount}`}
                    </li>
                    <li
                        className="paging-controls__control"
                        onClick={() => this.handleClick(this.props.currentPageIndex + 1)}
                    >
                        next
                    </li>
                    <li
                        className="paging-controls__control"
                        onClick={() => this.handleClick(this.props.pagesCount - 1)}
                    >
                        last
                    </li>
                </ul>
            </div>
        );
    }
}

PagingControls.propTypes = {
    pagesCount: PropTypes.number.isRequired,
    currentPageIndex: PropTypes.number.isRequired,
    updateSelectedOptionIndex: PropTypes.func.isRequired,
};
