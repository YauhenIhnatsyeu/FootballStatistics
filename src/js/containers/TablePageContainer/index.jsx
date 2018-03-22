import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {fetchLeague} from "ActionCreators";

import TablePage from "Pages/tablePage/TablePage";

const mapStateToProps = (state) => {
    return {
        currentLeagueIndex: state.currentLeagueIndex,
        leaguesData: state.leaguesData,
        fetchingErrorOccured: state.fetchingErrorOccured
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchLeague: bindActionCreators(fetchLeague, dispatch),
    }
}

export default
    connect(mapStateToProps, mapDispatchToProps)(TablePage);