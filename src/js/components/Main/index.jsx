import React from "react";

import {
	Route,
	Switch,
	Redirect
} from "react-router-dom";

// import TablePage from "Pages/tablePage/TablePage";
// import LeaguePage from "Pages/leaguePage/LeaguePage";
import TeamPage from "Pages/teamPage/TeamPage";

import TablePageContainer from "Containers/TablePageContainer";
import LeaguePageContainer from "Containers/LeaguePageContainer";

import "./index.css";

export default class Main extends React.Component {
	render() {
		const tablePage = (
			<div className="main__table-panel-container">
				{/* <TablePage leaguesIds={this.props.leaguesIds} /> */}
				<TablePageContainer />
			</div>
		);

		const leaguePage = (
			<div className="main__league-panel-container">
				<LeaguePageContainer />
			</div>
		);

		// const teamPage = (props) => (
		// 	<div className="main__team-panel-container">
		// 		<TeamPage teamId={props.match.params.id} />
		// 	</div>
		// );

		return (
			<main>
				<div className="main__inner-container wrapper">
					<Switch>
						<Route path="/table" render={() => tablePage} />
						<Route path="/teams" render={() => leaguePage} />
						{/* <Route path="/team/:id" render={(props) => teamPage(props)} />
						<Redirect to="/table" /> */}
					</Switch>
				</div>
			</main>
		);
	}
}