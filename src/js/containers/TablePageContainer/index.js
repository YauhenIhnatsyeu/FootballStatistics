import { connect } from "react-redux";

import TablePage from "Pages/tablePage/TablePage";

const mapStateToProps = state => ({
    leagueIndex: state.selectedOptionsIndeces.leagueIndex,
    leaguesTitles: state.leaguesData.leaguesTitles,
    fetchingErrorOccured: state.fetchingErrorOccured,
});

export default
connect(mapStateToProps)(TablePage);
