import PropTypes from "prop-types";

import React, { Component } from "react";

import TabsContainer from "Containers/TabsContainer";
import Tab from "Components/tabs/Tab";

import "./index.css";

export default class TeamItemForHeader extends Component {
    render() {
        return (
            <div className="item">
                <div className="team-item-for-header__team">
                    <img src={this.props.team.crestUrl} className="team-item-for-header__img" alt="" />
                    <div className="team-item__info-container">
                        <p className="team-item-for-header__name">{this.props.team.name}</p>
                        <p>Short name: {this.props.team.shortName}</p>
                    </div>
                </div>

                <div className="team-item-for-header__tabs-container">
                    <TabsContainer selectedOptionKey="teamPageIndex">
                        <Tab title="Players" />
                        <Tab title="Fixtures" />
                    </TabsContainer>
                </div>
            </div>
        );
    }
}

TeamItemForHeader.propTypes = {
    team: PropTypes.shape({
        crestUrl: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        shortName: PropTypes.string.isRequired,
    }).isRequired,
};
