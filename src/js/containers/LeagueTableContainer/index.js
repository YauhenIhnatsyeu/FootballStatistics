import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {fetchLeague} from "ActionCreators";

import LeagueTable from "Pages/tablePage/LeagueTable";
import selectedOptionIndex from "../../reducers/selectedOptionIndex";

const mapStateToProps = (state) => {
    return {
        leaguesData: state.leaguesData,
        currentLeagueIndex: state.selectedOptionIndex.currentLeagueIndex
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchLeague: bindActionCreators(fetchLeague, dispatch),
    }
}

export default
    connect(mapStateToProps, mapDispatchToProps)(LeagueTable);