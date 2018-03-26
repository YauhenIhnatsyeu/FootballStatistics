import PropTypes from "prop-types";

import React from "react";

import PlayerItem from "../PlayerItem";

import "./index.css";

export default class PlayersList extends React.Component {
    render() {
        const startIndex =
            this.props.currentPageIndex * this.props.itemsOnOnePageCount;

        return (
            <div className="players-list">
                {this.props.players
                    .slice(
                        startIndex,
                        this.props.itemsOnOnePageCount + startIndex,
                    )
                    .map((player, index) => {
                        return (
                            <div key={index} className="players-list__player-item-container">
                                <PlayerItem player={player} />
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

PlayersList.propTypes = {
    players: PropTypes.arrayOf(PropTypes.object).isRequired,
    currentPageIndex: PropTypes.number.isRequired,
    itemsOnOnePageCount: PropTypes.number.isRequired,
};
