import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getTeamsFromFavourites } from "ActionCreators";

import TeamList from "Pages/leaguePage/TeamsList";

const mapStateToProps = state => ({
    teams: state.teams,
});

const mapDispatchToProps = dispatch => ({
    getTeamsFromFavourites: bindActionCreators(getTeamsFromFavourites, dispatch),
});

export default
connect(mapStateToProps, mapDispatchToProps)(TeamList);