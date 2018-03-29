import React, { Component } from "react";

import PropTypes from "prop-types";

import Loading from "Components/messages/Loading";
import Error from "Components/messages/Error";

import TeamItemForHeader from "../TeamItemForHeader";
import PlayersPage from "../pages/playersPage/PlayersPage";
import TeamInfo from "../teamInfo/TeamInfo";
import FixturesPage from "../pages/fixturesPage/FixturesPage";

import "./index.css";

export default class TeamPage extends Component {
    constructor(props) {
        super(props);

        this.props.fetchTeam(this.props.teamId);
    }

    render() {
        if (this.props.fetchingErrorOccured) {
            return <Error />;
        }

        if (!this.props.team) {
            return <Loading />;
        }

        return (
            <div className="team-panel">
                <div className="team-panel__team-item-for-header-container">
                    <TeamItemForHeader
                        team={this.props.team}
                        defaultTeamPageIndex={this.props.teamPageIndex}
                        updateTeamPageIndex={this.props.updateTeamPageIndex}
                    />
                </div>
                <TeamInfo>
                    {this.props.teamPageIndex === 0 ?
                        <PlayersPage team={this.props.team} />
                        :
                        <FixturesPage />
                    }
                </TeamInfo>
            </div>
        );
    }
}

TeamPage.propTypes = {
    teamId: PropTypes.number.isRequired,
    fetchTeam: PropTypes.func.isRequired,
    fetchingErrorOccured: PropTypes.bool,
    team: PropTypes.shape({
        id: PropTypes.number,
        crestUrl: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        shortName: PropTypes.string.isRequired,
        squadMarketValue: PropTypes.string,
    }),
    teamPageIndex: PropTypes.number.isRequired,
    updateTeamPageIndex: PropTypes.func.isRequired,
};

TeamPage.defaultProps = {
    fetchingErrorOccured: false,
    team: null,
};
