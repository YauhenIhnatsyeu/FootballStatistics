import React from "react";

import {Tabs, Tab} from "./tabs";

export default class TeamsItemForHeader extends React.Component {
	render() {
		return (
            <div className="teams-item teams-item-for-header">
                <div className="teams-item-for-header__teams-item">
                    <div className="teams-item__logo-container">
                        <img src={this.props.team.crestUrl} className="teams-item__logo"/>
                    </div>
                    <div className="teams-item__info-container">
                        <p className="teams-item__name teams-item-for-header__name">{this.props.team.name}</p>
                        <p className="teams-item__short-name">Short name: {this.props.team.shortName}</p>
                    </div>
                </div>
                
                <div className="teams-item-for-header__tabpanel-container">
                    <Tabs onTabClick={this.props.onTabClick}>
                        <Tab title="Players">
                        </Tab>
                        <Tab title="Fixtures">
                        </Tab>
                    </Tabs>
                </div>
            </div>
		);
	}
}