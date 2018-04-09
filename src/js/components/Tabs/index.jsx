import React, { Component } from "react";

import PropTypes from "prop-types";

import classNames from "classnames";

import "./index.css";

export default class Tabs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentIndex: this.props.defaultIndex,
        };
    }

    handleClick = (e, newIndex) => {
        e.preventDefault();

        this.setState({
            currentIndex: newIndex,
        });
        console.log(newIndex);

        if (this.props.onTabClick) {
            this.props.onTabClick(newIndex);
        }
    }

    render() {
        console.log("Here");
        return (
            <div className="tabs">
                {this.props.titles && this.props.titles.map((title, newIndex) => {
                    const isTabCurrent = newIndex === this.state.currentIndex;

                    const style = classNames({
                        tabs__tab: true,
                        tabs__tab_current: isTabCurrent,
                    });

                    return (
                        <button
                            className={style}
                            key={newIndex}
                            onClick={e => this.handleClick(e, newIndex)}
                        >
                            {title}
                        </button>
                    );
                })}
            </div>
        );
    }
}

Tabs.propTypes = {
    titles: PropTypes.arrayOf(PropTypes.string),
    defaultIndex: PropTypes.number,
    onTabClick: PropTypes.func,
};

Tabs.defaultProps = {
    titles: null,
    defaultIndex: 0,
    onTabClick: null,
};
