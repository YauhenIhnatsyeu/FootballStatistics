import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {fetchLeague, fetchTeams} from "ActionCreators";

import LeaguePage from "Pages/leaguePage/LeaguePage";

const mapStateToProps = (state) => {
    return {
        leaguesData: state.leaguesData,
        fetchingErrorOccured: state.fetchingErrorOccured,
        leagueIndex: state.leagueIndex
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchLeague: bindActionCreators(fetchLeague, dispatch),
        fetchTeams: bindActionCreators(fetchTeams, dispatch)
    }
}

export default
    connect(mapStateToProps, mapDispatchToProps)(LeaguePage);