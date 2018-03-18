import React from "react";

export default class LeagueSelector extends React.Component {
	render() {
		return (
			<div className="league-panel__legue-selector-container">
				<div className="selector">
					<select className="selector__select" onChange={this.props.onChange} defaultValue={this.props.default}>
						{this.props.options.map((option, index) => {
							return (
								<option key={index}>
									{option}
								</option>
							);
						})}
					</select>
				</div>
			</div>
		);
	}
}