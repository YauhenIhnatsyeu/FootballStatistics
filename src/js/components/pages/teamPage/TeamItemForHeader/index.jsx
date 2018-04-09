import React, { Component } from "react";

import PropTypes from "prop-types";

import { withRouter } from "react-router-dom";

import teamRoutes from "Constants/teamRoutes";

import Tabs from "Components/Tabs";

import Item from "Components/Item";

import "./index.css";

export default class TeamItemForHeader extends Component {
    handleTabClick = (tabIndex, history, currentPath) => {
        const newPath = (teamRoutes[tabIndex].path);
        if (newPath) {
            this.props.browseTeamUrl(currentPath, newPath, history);
        }
    }

    tabsHOC = () => withRouter(props => (
        <Tabs
            titles={teamRoutes.map((route => route.caption))}
            onTabClick={tabIndex => this.handleTabClick(tabIndex, props.history, props.location.pathname)}
        />
    ))

    render() {
        const TabsHOC = this.tabsHOC();

        return (
            <Item>
                <div className="team-item-for-header__team">
                    <img src={this.props.team.crestUrl} className="team-item-for-header__img" alt="" />
                    <div className="team-item__info-container">
                        <p className="team-item-for-header__name">{this.props.team.name}</p>
                        <p>Short name: {this.props.team.shortName}</p>
                    </div>
                </div>

                <div className="team-item-for-header__tabs-container">
                    <TabsHOC />
                </div>
            </Item>
        );
    }
}

TeamItemForHeader.propTypes = {
    team: PropTypes.shape({
        crestUrl: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        shortName: PropTypes.string.isRequired,
    }).isRequired,
    defaultTeamPageIndex: PropTypes.number,
    updateTeamPageIndex: PropTypes.func.isRequired,
    browseTeamUrl: PropTypes.func.isRequired,
};

TeamItemForHeader.defaultProps = {
    defaultTeamPageIndex: 0,
};
