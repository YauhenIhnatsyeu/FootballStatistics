import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {
    addTeamToFavourites, 
    removeTeamFromFavourites
} from "ActionCreators";

import TeamItem from "Pages/leaguePage/TeamItem";

const mapStateToProps = (state) => {
    return {
        favouriteTeams: state.favouriteTeams
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTeamToFavourites: bindActionCreators(addTeamToFavourites, dispatch),
        removeTeamFromFavourites: bindActionCreators(removeTeamFromFavourites, dispatch)
    }
}

export default
    connect(mapStateToProps, mapDispatchToProps)(TeamItem);