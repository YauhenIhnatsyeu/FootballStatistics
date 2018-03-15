import React from "react";

export default class MainTeam extends React.Component {
	render() {
		return (
			<div className="item">
                <div className="player-item__info-container">
                    <p className="item__name team-item-for-header__name">{this.props.player.name}</p>
                    <p className="player-item__info">{this.props.player.position}</p>
                    <p className="player-item__info">{this.props.player.dateOfBirth}</p>
                    <p className="player-item__info">{this.props.player.marketValue}</p>
                    {
						//If squadMarketValue isn't null or underfined we can display it
						this.props.player.marketValue && 
						<p className="item__market-value">Squad market value: {this.props.team.squadMarketValue}</p>
					}
                </div>
                <div className="player-item__img-container">
                    <img className="player-item__img"></img>
                </div>
            </div>
		);
	}
}