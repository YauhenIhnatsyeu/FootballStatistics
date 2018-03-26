import { connect } from "react-redux";

import TablePage from "Pages/tablePage/TablePage";

const mapStateToProps = state => ({
    leagueIndex: state.selectedOptionsIndeces.leagueIndex,
    leaguesData: state.leaguesData,
    fetchingErrorOccured: state.fetchingErrorOccured,
});

export default
connect(mapStateToProps)(TablePage);