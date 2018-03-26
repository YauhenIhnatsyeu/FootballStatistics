import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {fetchTeams, getTeamsFromFavourites} from "ActionCreators";

import TeamList from "Pages/leaguePage/TeamsList";

const mapStateToProps = (state) => {
    return {
        teams: state.teams
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTeamsFromFavourites: bindActionCreators(getTeamsFromFavourites, dispatch)
    }
}

export default
    connect(mapStateToProps, mapDispatchToProps)(TeamList);