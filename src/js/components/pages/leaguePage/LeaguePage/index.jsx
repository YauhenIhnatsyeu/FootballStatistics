import React, { Component } from "react";

import PropTypes from "prop-types";

import SectionHeader from "Components/SectionHeader";
import TeamsListContainer from "Containers/TeamsListContainer";
import leaguesData from "Constants/leaguesData";

import LeagueSelector from "../LeagueSelector";

import "./index.css";

export default class LeaguePage extends Component {
    componentDidMount() {
        const leagueId = leaguesData[this.props.leagueIndex].id;

        this.props.fetchTeams(leagueId);
    }

    handleSelectorChaged = (leagueIndex) => {
        this.props.updateLeagueIndex(leagueIndex);

        this.props.fetchTeams(leaguesData[leagueIndex].id);
    }

    render() {
        return (
            <React.Fragment>
                <SectionHeader title={leaguesData[this.props.leagueIndex].title} />

                <div className="league-panel__legue-selector-container">
                    <LeagueSelector
                        leagueIndex={this.props.leagueIndex}
                        onChange={this.handleSelectorChaged}
                    />
                </div>

                <div className="league-panel__teams-list-container">
                    <TeamsListContainer />
                </div>
            </React.Fragment>
        );
    }
}

LeaguePage.propTypes = {
    leagueIndex: PropTypes.number.isRequired,
    updateLeagueIndex: PropTypes.func.isRequired,
    fetchTeams: PropTypes.func.isRequired,
};
