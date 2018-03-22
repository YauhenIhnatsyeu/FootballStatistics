import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {selectNewLeague, selectNewTeams} from "ActionCreators";

import LeaguePage from "Pages/leaguePage/LeaguePage";

const mapStateToProps = (state) => {
    return {
        leaguesData: state.leaguesData,
        fetchingErrorOccured: state.fetchingErrorOccured,
        currentLeagueIndex: state.currentLeagueIndex
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectNewLeague: bindActionCreators(selectNewLeague, dispatch),
        selectNewTeams: bindActionCreators(selectNewTeams, dispatch)
    }
}

export default
    connect(mapStateToProps, mapDispatchToProps)(LeaguePage);