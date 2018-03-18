import React from "react";

export default class MainTeam extends React.Component {
	render() {
		return (
			<div className="item">
                <div className="player-item__info-container">
                    <p className="item__name team-item-for-header__name">
                        {/* If jerseyNumber is null or undefined, don't display it */}
                        {this.props.player.jerseyNumber && this.props.player.jerseyNumber + ". "} {this.props.player.name}
                    </p>
                    <p className="player-item__info">Position: {this.props.player.position}</p>
                    <p className="player-item__info">Date of birth: {this.props.player.dateOfBirth}</p>
                    {
						//If squadMarketValue isn't null or underfined we can display it
						this.props.player.marketValue && 
						<p className="item__market-value">Market value: {this.props.player.marketValue}</p>
					}
                </div>
                <div className="player-item__img-container">
                    <img className="player-item__img"></img>
                </div>
            </div>
		);
	}
}