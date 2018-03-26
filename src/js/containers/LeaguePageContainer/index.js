import { connect } from "react-redux";

import LeaguePage from "Pages/leaguePage/LeaguePage";

const mapStateToProps = state => ({
    leaguesData: state.leaguesData,
    fetchingErrorOccured: state.fetchingErrorOccured,
    leagueIndex: state.selectedOptionsIndeces.leagueIndex,
});

export default
connect(mapStateToProps)(LeaguePage);