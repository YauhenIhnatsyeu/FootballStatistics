import React from "react";

import PlayerItem from "../PlayerItem";

import "./index.css";

export default class PlayersList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const startIndex = 
			this.props.currentPageIndex * this.props.playersOnOnePageCount;

		return (
			<div className="players-list">
				{this.props.players
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