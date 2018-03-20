import React from "react";

import "./index.css";

export default class PlayerItem extends React.Component {
	render() {
		return (
			<div className="item">
                <p className="player-item__name">
                    {/* If jerseyNumber is null or undefined, don't display it */}
                    {this.props.player.jerseyNumber && this.props.player.jerseyNumber + ". "} {this.props.player.name}
                </p>
                <p>Position: {this.props.player.position}</p>
                <p>Date of birth: {this.props.player.dateOfBirth}</p>
                {
                    //If squadMarketValue isn't null or underfined we can display it
                    this.props.player.marketValue && 
                    <p>Market value: {this.props.player.marketValue}</p>
                }
            </div>
		);
	}
}