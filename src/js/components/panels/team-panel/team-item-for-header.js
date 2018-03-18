import React from "react";

import {Tabs, Tab} from "../../tabs";

export default class TeamItemForHeader extends React.Component {
	render() {
		return (
            <div className="item team-item-for-header">
                <div className="team-item-for-header__team-item">
                    <div className="team-item__img-container">
                        <img src={this.props.team.crestUrl} className="item__img"/>
                    </div>
                    <div className="team-item__info-container">
                        <p className="item__name team-item-for-header__name">{this.props.team.name}</p>
                        <p className="item__short-name">Short name: {this.props.team.shortName}</p>
                    </div>
                </div>
                
                <div className="team-item-for-header__tabpanel-container">
                    <Tabs
                        onTabClick={this.props.onTabClick}
                        defaultIndex={this.props.defaultTabsIndex}
                    >
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