import React, { Component } from "react";

import PropTypes from "prop-types";

import itemsOnOnePageCount from "Constants/itemsOnOnePageCount";

import "./index.css";

export default class ItemsList extends Component {
    render() {
        const startIndex =
            this.props.currentPageIndex * itemsOnOnePageCount;

        const extraProps = {};

        return (
            <div className="players-list">
                {this.props.items
                    .slice(
                        startIndex,
                        itemsOnOnePageCount + startIndex,
                    )
                    .map((item, index) => {
                        extraProps[this.props.itemKey] = item;

                        const newItem = React.cloneElement(
                            this.props.itemComponent,
                            extraProps,
                        );

                        return (
                            <div className="items-list__item-container" key={index}>
                                {newItem}
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

ItemsList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    itemComponent: PropTypes.node.isRequired,
    itemKey: PropTypes.string.isRequired,
    currentPageIndex: PropTypes.number.isRequired,
};
