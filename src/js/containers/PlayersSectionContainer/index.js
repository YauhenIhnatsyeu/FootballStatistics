import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {fetchPlayers, updateSelectedOptionIndex} from "ActionCreators";

import PlayersSection from "PlayersPageSections/playersSection/PlayersSection";

const mapStateToProps = (state) => {
    return {
        team: state.team,
        players: state.players,
        currentPageIndex: state.selectedOptionsIndeces.playersPagingControlsPageIndex,
        itemsOnOnePageCount: state.itemsOnOnePageCount,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPlayers: bindActionCreators(fetchPlayers, dispatch),
        updateSelectedOptionIndex: bindActionCreators(updateSelectedOptionIndex, dispatch)
    };
};

export default
    connect(mapStateToProps, mapDispatchToProps)(PlayersSection);