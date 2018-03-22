import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {fetchLeague} from "ActionCreators";

import LeagueTable from "Pages/tablePage/LeagueTable";

const mapStateToProps = (state) => {
    return {
        currentLeague: state.leaguesData.currentLeague.standing
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchLeague: bindActionCreators(fetchLeague, dispatch),
    }
}

export default
    connect(mapStateToProps, mapDispatchToProps)(LeagueTable);