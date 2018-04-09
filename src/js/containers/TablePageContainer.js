import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { updateLeagueIndex, fetchLeague } from "ActionCreators";

import TablePage from "Pages/tablePage/TablePage";

const mapStateToProps = state => ({
    league: state.league,
    leagueIndex: state.leagueIndex,
    leagueFetchingErrorOccured: state.leagueFetchingErrorOccured,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ updateLeagueIndex, fetchLeague }, dispatch);

export default
connect(mapStateToProps, mapDispatchToProps)(TablePage);
