import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {selectNewLeague, selectNewTeams} from "ActionCreators";

import LeagueSelector from "Pages/leaguePage/LeagueSelector";

const mapStateToProps = (state) => {
    return {
        leaguesData: state.leaguesData,
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
    connect(mapStateToProps, mapDispatchToProps)(LeagueSelector);