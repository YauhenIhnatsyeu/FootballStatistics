import PropTypes from "prop-types";

import React, { Component } from "react";

import Tab from "../Tab";

import "./index.css";

export default class Tabs extends Component {
    handleClick = (e, tabIndex) => {
        e.preventDefault();

        if (this.props.selectedOptionsIndeces[this.props.selectedOptionKey] === tabIndex) {
            return;
        }

        this.props.updateSelectedOptionIndex(
            this.props.selectedOptionKey,
            tabIndex,
        );
    }

    render() {
        return (
            <div className="tabs">
                {this.props.children.map((tab, tabIndex) => {
                    if (tab.type !== Tab) {
                        return null;
                    }

                    const isTabCurrent =
                        tabIndex === this.props.selectedOptionsIndeces[
                            this.props.selectedOptionKey
                        ];

                    const tabStyle = isTabCurrent ?
                        "tabs__tab tabs__tab_current" : "tabs__tab";

                    return (
                        <a
                            className={tabStyle}
                            key={tabIndex}
                            href="#"
                            onClick={e => this.handleClick(e, tabIndex)}
                        >
                            {tab.props.title}
                        </a>
                    );
                })}
            </div>
        );
    }
}

Tabs.propTypes = {
    children: PropTypes.node.isRequired,
    selectedOptionKey: PropTypes.string.isRequired,
    selectedOptionsIndeces: PropTypes.shape({
        leagueIndex: PropTypes.number.isRequired,
        teamPageIndex: PropTypes.number.isRequired,
        playersPagingControlsPageIndex: PropTypes.number.isRequired,
    }).isRequired,
    updateSelectedOptionIndex: PropTypes.func.isRequired,
};
