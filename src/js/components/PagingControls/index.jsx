import PropTypes from "prop-types";

import React, { Component } from "react";

import "./index.css";

export default class PagingControls extends Component {
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

    pageIndexIsValid = pageIndex => (
        pageIndex >= 0
        && pageIndex < this.props.pagesCount
        && pageIndex !== this.props.currentPageIndex
    )

    updatePageIndex = (pageIndex) => {
        this.props.updateSelectedOptionIndex(
            "playersPagingControlsPageIndex",
            pageIndex,
        );
    }

    handleClickBase = (pageIndex) => {
        if (!this.pageIndexIsValid(pageIndex)) {
            return;
        }

        this.updatePageIndex(pageIndex);
    }

    handleClick = (e, pageIndex) => {
        e.preventDefault();
        this.handleClickBase(pageIndex);
    }

    handleChange = (pageIndex) => {
        this.handleClickBase(pageIndex);
    }

    render() {
        return (
            <div className="paging-controls">
                <select
                    className="paging-controls__item paging-controls__select"
                    onChange={e => this.handleChange(e.target.value - 1)}
                    value={this.props.currentPageIndex + 1}
                >
                    {this.getOptions()}
                </select>
                <a
                    className="paging-controls__item paging-controls__link"
                    href="#"
                    onClick={e => this.handleClick(e, 0)}
                >
                    first
                </a>
                <a
                    className="paging-controls__item paging-controls__link"
                    href="#"
                    onClick={e => this.handleClick(e, this.props.currentPageIndex - 1)}
                >
                    prev
                </a>
                <span className="paging-controls__item paging-controls__indicator">
                    {`${this.props.currentPageIndex + 1}/${this.props.pagesCount}`}
                </span>
                <a
                    className="paging-controls__item paging-controls__link"
                    href="#"
                    onClick={e => this.handleClick(e, this.props.currentPageIndex + 1)}
                >
                    next
                </a>
                <a
                    className="paging-controls__item paging-controls__link"
                    href="#"
                    onClick={e => this.handleClick(e, this.props.pagesCount - 1)}
                >
                    last
                </a>
            </div>
        );
    }
}

PagingControls.propTypes = {
    pagesCount: PropTypes.number.isRequired,
    currentPageIndex: PropTypes.number.isRequired,
    updateSelectedOptionIndex: PropTypes.func.isRequired,
};
