import React from "react";

import Tab from "../Tab";

import "./index.css";

export default class Tabs extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			currentTabIndex:
				this.props.defaultIndex ?
					this.props.defaultIndex : 0
		};
	}
	
	handleClick = (tabIndex) => {
		if (this.state.currentTabIndex === tabIndex)
			return;

		if (this.props.onTabClick) {
			this.props.onTabClick(tabIndex);
		}

		this.setState({
			currentTabIndex: tabIndex
		})
	}

    render() {
    	return (
    		<div className="tabs">
				<ul className="tabs__list">
					{this.props.children.map((tab, tabIndex) => {
						if (tab.type !== Tab)
							return null;

						if (tabIndex === this.state.currentTabIndex) {
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