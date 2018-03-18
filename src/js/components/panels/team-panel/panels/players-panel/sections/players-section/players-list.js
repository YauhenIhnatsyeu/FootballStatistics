import React from "react";

import PlayerItem from "./player-item";

export default class PlayersList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		//Calculating startIndex based on new current page
		const startIndex = 
			this.props.currentPageIndex * this.props.playersOnOnePageCount;

		return (
			<div className="players-list">
				{this.props.players
					//Slicing, because we need only a part of whole players items
					.slice(
						startIndex,
						this.props.playersOnOnePageCount + startIndex
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