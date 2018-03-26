import { connect } from "react-redux";

import LeaguePage from "Pages/leaguePage/LeaguePage";

const mapStateToProps = state => ({
    leaguesTitles: state.leaguesData.leaguesTitles,
    leagueIndex: state.selectedOptionsIndeces.leagueIndex,
});

export default
connect(mapStateToProps)(LeaguePage);
