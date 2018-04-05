import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
    addTeamToFavorites,
    removeTeamFromFavorites,
} from "ActionCreators";

import TeamItem from "Pages/leaguePage/TeamItem";

const mapStateToProps = state => ({
    favoriteTeams: state.favoriteTeams,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        addTeamToFavorites,
        removeTeamFromFavorites,
    }, dispatch);

export default
connect(mapStateToProps, mapDispatchToProps)(TeamItem);
