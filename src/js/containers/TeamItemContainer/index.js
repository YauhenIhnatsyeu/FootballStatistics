import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
    addTeamToFavourites,
    removeTeamFromFavourites,
} from "ActionCreators";

import TeamItem from "Pages/leaguePage/TeamItem";

const mapStateToProps = state => ({
    favouriteTeams: state.favouriteTeams,
});

const mapDispatchToProps = dispatch => ({
    addTeamToFavourites: bindActionCreators(addTeamToFavourites, dispatch),
    removeTeamFromFavourites: bindActionCreators(removeTeamFromFavourites, dispatch),
});

export default
connect(mapStateToProps, mapDispatchToProps)(TeamItem);
