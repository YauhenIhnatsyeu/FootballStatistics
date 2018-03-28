import PropTypes from "prop-types";

import React, { Component } from "react";

import TeamItemForHeaderContainer from "Containers/TeamItemForHeaderContainer";
import PlayersPageContainer from "Containers/PlayersPageContainer";

import Loading from "Components/messages/Loading";
import Error from "Components/messages/Error";

import TeamInfo from "../teamInfo/TeamInfo";
import FixturesPanel from "../pages/fixturesPage/FixturesPage";

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
                    <TeamItemForHeaderContainer />
                </div>
                <TeamInfo>
                    {this.props.teamPageIndex === 0 ?
                        <PlayersPageContainer />
                        :
                        <FixturesPanel />
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
};

TeamPage.defaultProps = {
    fetchingErrorOccured: false,
    team: null,
};
