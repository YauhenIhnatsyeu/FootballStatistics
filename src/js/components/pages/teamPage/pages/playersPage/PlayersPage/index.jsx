import PropTypes from "prop-types";

import React from "react";

import Section from "Pages/teamPage/teamInfo/Section";

import PlayersSectionContainer from "Containers/PlayersSectionContainer";

export default class PlayersPage extends React.Component {
    render() {
        const hashtag = this.props.team.shortName ?
            this.props.team.shortName.toLowerCase() : "football";

        return (
            <React.Fragment>
                <Section title="Players">
                    <PlayersSectionContainer />
                </Section>
                <Section title={`Tweets for tag #${hashtag}`} />
            </React.Fragment>
        );
    }
}

PlayersPage.propTypes = {
    team: PropTypes.shape({
        shortName: PropTypes.string.isRequired,
    }).isRequired,
};
