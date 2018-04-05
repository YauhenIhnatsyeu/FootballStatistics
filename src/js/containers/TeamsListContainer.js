import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getTeamsFromFavorites } from "ActionCreators";

import TeamList from "Pages/leaguePage/TeamsList";

const mapStateToProps = state => ({
    teams: state.teams,
    teamsFetchingErrorOccured: state.teamsFetchingErrorOccured,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ getTeamsFromFavorites }, dispatch);

export default
connect(mapStateToProps, mapDispatchToProps)(TeamList);
