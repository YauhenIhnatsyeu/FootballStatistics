import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchTeam } from "ActionCreators";

import TeamPage from "Pages/teamPage/TeamPage";

const mapStateToProps = state => ({
    team: state.team,
    teamPageIndex: state.selectedOptionsIndeces.teamPageIndex,
    fetchingErrorOccured: state.fetchingErrorOccured,
});

const mapDispatchToProps = dispatch => ({
    fetchTeam: bindActionCreators(fetchTeam, dispatch),
});

export default
connect(mapStateToProps, mapDispatchToProps)(TeamPage);
