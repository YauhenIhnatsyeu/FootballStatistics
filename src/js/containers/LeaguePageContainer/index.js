import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {
    fetchLeague, 
    fetchTeams
} from "ActionCreators";

import LeaguePage from "Pages/leaguePage/LeaguePage";

const mapStateToProps = (state) => {
    return {
        leaguesData: state.leaguesData,
        fetchingErrorOccured: state.fetchingErrorOccured,
        leagueIndex: state.selectedOptionsIndeces.leagueIndex
    };
}

export default
    connect(mapStateToProps)(LeaguePage);