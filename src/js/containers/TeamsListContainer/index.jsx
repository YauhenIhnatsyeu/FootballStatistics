import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {selectNewTeams} from "ActionCreators";

import TeamList from "Pages/leaguePage/TeamsList";

const mapStateToProps = (state) => {
    return {
        currentTeams: state.currentTeams
    };
}

export default
    connect(mapStateToProps)(TeamList);