import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {fetchPlayers, updateSelectedOptionIndex} from "ActionCreators";

import PlayersList from "PlayersPageSections/playersSection/PlayersList";

const mapStateToProps = (state) => {
    return {
        players: state.players,
        currentPageIndex: state.selectedOptionsIndeces.playersPagingControlsPageIndex,
        itemsOnOnePageCount: state.itemsOnOnePageCount,
    };
}

export default
    connect(mapStateToProps)(PlayersList);