import React, { Component } from "react";

import PropTypes from "prop-types";

import Tabs from "Components/Tabs";

import Item from "Components/Item";

import "./index.css";

export default class TeamItemForHeader extends Component {
    handleTabClick = (tabIndex) => {
        this.props.updateTeamPageIndex(tabIndex);
    }

    render() {
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
                    <Tabs
                        titles={["Players", "Fixtures"]}
                        defaultIndex={this.props.defaultTeamPageIndex}
                        onTabClick={this.handleTabClick}
                    />
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
};

TeamItemForHeader.defaultProps = {
    defaultTeamPageIndex: 0,
};
