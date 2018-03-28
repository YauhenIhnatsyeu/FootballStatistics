import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchPlayers, updatePlayersPageIndex } from "ActionCreators";

import PlayersSection from "PlayersPageSections/playersSection/PlayersSection";

const mapStateToProps = state => ({
    players: state.players,
    playersPageIndex: state.playersPageIndex,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        fetchPlayers,
        updatePlayersPageIndex,
    }, dispatch);

export default
connect(mapStateToProps, mapDispatchToProps)(PlayersSection);
