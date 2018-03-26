import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {fetchLeague} from "ActionCreators";

import LeagueTable from "Pages/tablePage/LeagueTable";
import selectedOptionsIndeces from "../../reducers/selectedOptionsIndeces";

const mapStateToProps = (state) => {
    return {
        leaguesData: state.leaguesData,
        leagueIndex: state.selectedOptionsIndeces.leagueIndex
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchLeague: bindActionCreators(fetchLeague, dispatch),
    }
}

export default
    connect(mapStateToProps, mapDispatchToProps)(LeagueTable);