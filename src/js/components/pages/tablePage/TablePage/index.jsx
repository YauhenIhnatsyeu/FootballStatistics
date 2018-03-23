import React from "react";

import TabsContainer from "Containers/TabsContainer";
import Tab from "Components/tabs/Tab";

import LeagueTableContainer from "Containers/LeagueTableContainer";

export default class TablePage extends React.Component {
	render() {
    	return (
			<React.Fragment>
				<TabsContainer
					selectedOptionKey="leagueIndex"
				>
					{this.props.leaguesData.leaguesTitles.map((tabTitle, index) => {
						return (
							<Tab key={index} title={tabTitle} />
						);
					})}
				</TabsContainer>

				<LeagueTableContainer />
			</React.Fragment>
    	);
    }
}