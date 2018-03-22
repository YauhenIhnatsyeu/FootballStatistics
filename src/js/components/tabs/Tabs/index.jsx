import React from "react";

import Tab from "../Tab";

import "./index.css";

export default class Tabs extends React.Component {
	handleClick = (tabIndex) => {
		if (this.props.currentLeagueIndex === tabIndex)
			return;

		this.props.selectNewLeague(
			this.props.leaguesData.leaguesIds[tabIndex], 
			tabIndex
		);
	}

    render() {
    	return (
    		<div className="tabs">
				<ul className="tabs__list">
					{this.props.children.map((tab, tabIndex) => {
						if (tab.type !== Tab)
							return null;

						if (tabIndex === this.props.currentLeagueIndex) {
							return (
								<li
									className="tabs__tab tabs__tab_current" 
									key={tabIndex} onClick={() => this.handleClick(tabIndex)}>
										{tab.props.title}
								</li>
							);
						} else {
							return (
								<li 
									className="tabs__tab" 
									key={tabIndex} onClick={() => this.handleClick(tabIndex)}>
										{tab.props.title}
								</li>
							);
						}
					})}
				</ul>
    		</div>
    	);
    }
}