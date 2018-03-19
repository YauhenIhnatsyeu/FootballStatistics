import React from "react";

import TablePanel from "./panels/table-panel/table-panel";

import "./index.css";

export default class MainTable extends React.Component {
	render() {
		return (
			<main>
				<div className="main__inner-container wrapper">
					<div className="main__table-panel-container">
						<TablePanel leaguesIds={this.props.leaguesIds} />
					</div>
				</div>
			</main>
		);
	}
}