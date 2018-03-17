import React from "react";

export class Tabs extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			//Index of current (selected) tab
			currentTabIndex:
				this.props.defaultIndex ?
					//If no default value was provided, use 0
					this.props.defaultIndex : 0
		};
	}
	
	//Is called when some tab was clicked
	handleClick = (tabIndex) => {
		//If an already active tab was clicked, do nothing
		if (this.state.currentTabIndex === tabIndex)
			return;

		if (this.props.onTabClick) {
			//Firstly, call handler from props and pass tabIndex to it,
			//so handler can use it
			this.props.onTabClick(tabIndex);
		}

		//Secondly update currentTabIndex
		this.setState({
			currentTabIndex: tabIndex
		})
	}

    render() {
    	return (
    		<div className="tab-panel">
				{/* Return ul, which has list of li, which represents list of tabs we can click on */}
				<ul className="tab-panel__list">
					{this.props.children.map((tab, tabIndex) => {
						//If child of Tabs is not a Tab object, skip it
						if (tab.type !== Tab)
							return null;

						//If tab is current, apply corresponding style (with _current modifier)
						if (tabIndex === this.state.currentTabIndex) {
							return (
								//A tab is a <li></li> component
								<li
									className="tab-panel__tab tab-panel__tab_current" 
									key={tabIndex} onClick={() => this.handleClick(tabIndex)}>
										{tab.props.title}
								</li>
							);
						} else {
							//If tab isn't current, display it as a usual tab
							return (
								<li 
									className="tab-panel__tab" 
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

//Tab is only for semantics, that's why it doesn't render anything
export class Tab extends React.Component {
	render() {
		return null;
	}
}