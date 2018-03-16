import React from "react";

import PlayerItem from "./player-item";

export default class PlayersList extends React.Component {
	constructor(props) {
		super(props);

		//How many players item can be in PlayersList
		this.PLAYERS_ON_ONE_PAGE_COUNT = 20;
	}

	render() {
		return (
			<div className="players-list">
				{this.props.players
					//Slicing, because we need only a part of whole players items
					.slice(
						this.props.startIndex,
						this.PLAYERS_ON_ONE_PAGE_COUNT + this.props.startIndex
					)
					.map((player, index) => {
					return (
						<div key={index} className="players-list__player-item-container">
							<PlayerItem player={player} />
						</div>
					)
				})}
			</div>
		);
	}
}