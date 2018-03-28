import PropTypes from "prop-types";

import React from "react";

import "./index.css";

export default class PlayerItem extends React.Component {
    render() {
        return (
            <div className="item">
                <p className="player-item__name">
                    {this.props.player.jerseyNumber && `${this.props.player.jerseyNumber}. `}
                    {this.props.player.name}
                </p>
                <p>Position: {this.props.player.position}</p>
                <p>Date of birth: {this.props.player.dateOfBirth}</p>
                {
                    this.props.player.marketValue &&
                    <p>Market value: {this.props.player.marketValue}</p>
                }
            </div>
        );
    }
}

PlayerItem.propTypes = {
    player: PropTypes.shape({
        jerseyNumber: PropTypes.number,
        name: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        dateOfBirth: PropTypes.string.isRequired,
        marketValue: PropTypes.string,
    }),
};

PlayerItem.defaultProps = {
    player: PropTypes.shape({
        marketValue: null,
        jerseyNumber: null,
    }),
};
