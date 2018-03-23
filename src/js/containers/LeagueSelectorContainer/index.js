import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {
    fetchLeague, 
    fetchTeams,
    updateSelectedOptionIndex
} from "ActionCreators";

import LeagueSelector from "Pages/leaguePage/LeagueSelector";

const mapStateToProps = (state) => {
    return {
        leaguesData: state.leaguesData,
        currentLeagueIndex: state.selectedOptionIndex.currentLeagueIndex
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateSelectedOptionIndex: bindActionCreators(updateSelectedOptionIndex, dispatch),
        fetchLeague: bindActionCreators(fetchLeague, dispatch),
        fetchTeams: bindActionCreators(fetchTeams, dispatch)
    }
}

export default
    connect(mapStateToProps, mapDispatchToProps)(LeagueSelector);