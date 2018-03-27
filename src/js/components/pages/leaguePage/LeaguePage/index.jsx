import PropTypes from "prop-types";

import React from "react";

import SectionHeader from "Components/SectionHeader";
import LeagueSelectorContainer from "Containers/LeagueSelectorContainer";
import TeamsListContainer from "Containers/TeamsListContainer";

import "./index.css";

export default class LeaguePage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <SectionHeader
                    title={this.props.leaguesTitles[this.props.leagueIndex]}
                />

                <div className="league-panel__legue-selector-container">
                    <LeagueSelectorContainer />
                </div>

                <div className="league-panel__teams-list-container">
                    <TeamsListContainer />
                </div>
            </React.Fragment>
        );
    }
}
LeaguePage.propTypes = {
    leaguesTitles: PropTypes.arrayOf(PropTypes.string).isRequired,
    leagueIndex: PropTypes.number.isRequired,
};
