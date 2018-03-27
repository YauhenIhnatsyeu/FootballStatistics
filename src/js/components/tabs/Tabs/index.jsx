import PropTypes from "prop-types";

import React from "react";

import Tab from "../Tab";

import "./index.css";

export default class Tabs extends React.Component {
    handleClick = (tabIndex) => {
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
                <ul className="tabs__list">
                    {this.props.children.map((tab, tabIndex) => {
                        if (tab.type !== Tab) {
                            return null;
                        }

                        return (
                            <li
                                className={
                                    tabIndex === this.props.selectedOptionsIndeces[
                                        this.props.selectedOptionKey
                                    ] ?
                                        "tabs__tab tabs__tab_current"
                                        :
                                        "tabs__tab"
                                }
                                key={tabIndex}
                                onClick={() => this.handleClick(tabIndex)}
                            >
                                {tab.props.title}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

Tabs.propTypes = {
    children: PropTypes.node.isRequired,
    selectedOptionKey: PropTypes.string.isRequired,
    selectedOptionsIndeces: PropTypes.object.isRequired,
    updateSelectedOptionIndex: PropTypes.func.isRequired,
};
