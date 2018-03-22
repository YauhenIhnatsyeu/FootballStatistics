import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {fetchLeague, fetchTeams} from "ActionCreators";

import LeagueSelector from "Pages/leaguePage/LeagueSelector";

const mapStateToProps = (state) => {
    return {
        leaguesData: state.leaguesData,
        currentLeagueIndex: state.currentLeagueIndex
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchLeague: bindActionCreators(fetchLeague, dispatch),
        fetchTeams: bindActionCreators(fetchTeams, dispatch)
    }
}

export default
    connect(mapStateToProps, mapDispatchToProps)(LeagueSelector);