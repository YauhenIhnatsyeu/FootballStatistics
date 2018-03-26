import PropTypes from "prop-types";

import React from "react";

import "./index.css";

export default class LeagueSelector extends React.Component {
    constructor(props) {
        super(props);

        this.props.fetchLeague(
            this.props.leaguesData.leaguesIds[this.props.leagueIndex]
        );

        this.props.fetchTeams(
            this.props.leaguesData.leaguesIds[this.props.leagueIndex]
        );
    }

    handleChange = (event) => {
        const leagueIndex =
            this.props.leaguesData.leaguesTitles.indexOf(event.target.value);

        this.props.updateSelectedOptionIndex(
            "leagueIndex",
            leagueIndex,
        );

        this.props.fetchTeams(this.props.leaguesData.leaguesIds[leagueIndex]);
    }

    render() {
        return (
            <div className="selector">
                <select
                    className="selector__select"
                    onChange={this.handleChange}
                    value={this.props.leaguesData.leaguesTitles[this.props.leagueIndex]}
                >
                    {this.props.leaguesData.leaguesTitles.map((title, index) => {
                        return (
                            <option key={index}>
                                {title}
                            </option>
                        );
                    })}
                </select>
            </div>
        );
    }
}

LeagueSelector.propTypes = {
    fetchLeague: PropTypes.func.isRequired,
    fetchTeams: PropTypes.func.isRequired,
    updateSelectedOptionIndex: PropTypes.func.isRequired,
    leaguesData: PropTypes.shape({
        leaguesIds: PropTypes.arrayOf(PropTypes.number).isRequired,
        leaguesTitles: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    leagueIndex: PropTypes.number.isRequired,
};
