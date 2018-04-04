import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getTeamsFromFavourites } from "ActionCreators";

import TeamList from "Pages/leaguePage/TeamsList";

const mapStateToProps = state => ({
    teams: state.teams,
    teamsFetchingErrorOccured: state.teamsFetchingErrorOccured,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ getTeamsFromFavourites }, dispatch);

export default
connect(mapStateToProps, mapDispatchToProps)(TeamList);
