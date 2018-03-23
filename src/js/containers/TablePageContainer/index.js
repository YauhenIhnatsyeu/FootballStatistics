import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {fetchLeague} from "ActionCreators";

import TablePage from "Pages/tablePage/TablePage";

const mapStateToProps = (state) => {
    return {
        leagueIndex: state.selectedOptionIndeces.leagueIndex,
        leaguesData: state.leaguesData,
        fetchingErrorOccured: state.fetchingErrorOccured
    };
}

export default
    connect(mapStateToProps)(TablePage);