import { connect } from "react-redux";

import PlayersList from "PlayersPageSections/playersSection/PlayersList";

const mapStateToProps = state => ({
    players: state.players,
    currentPageIndex: state.selectedOptionsIndeces.playersPagingControlsPageIndex,
    itemsOnOnePageCount: state.itemsOnOnePageCount,
});

export default
connect(mapStateToProps)(PlayersList);