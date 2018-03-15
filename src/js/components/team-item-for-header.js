import React from "react";

import {Tabs, Tab} from "./tabs";

export default class TeamItemForHeader extends React.Component {
	render() {
		return (
            <div className="team-item team-item-for-header">
                <div className="team-item-for-header__team-item">
                    <div className="team-item__logo-container">
                        <img src={this.props.team.crestUrl} className="team-item__logo"/>
                    </div>
                    <div className="team-item__info-container">
                        <p className="team-item__name team-item-for-header__name">{this.props.team.name}</p>
                        <p className="team-item__short-name">Short name: {this.props.team.shortName}</p>
                    </div>
                </div>
                
                <div className="team-item-for-header__tabpanel-container">
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