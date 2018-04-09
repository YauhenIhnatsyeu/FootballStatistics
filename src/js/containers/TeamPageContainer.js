import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
    fetchTeam,
    updateTeamPageIndex,
} from "ActionCreators";

import TeamPage from "Pages/teamPage/TeamPage";

const mapStateToProps = state => ({
    team: state.teamData.team,
    teamPageIndex: state.teamData.teamPageIndex,
    teamFetchingErrorOccured: state.fetchingErrors.teamFetchingErrorOccured,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        fetchTeam,
        updateTeamPageIndex,
    }, dispatch);

export default
connect(mapStateToProps, mapDispatchToProps)(TeamPage);
