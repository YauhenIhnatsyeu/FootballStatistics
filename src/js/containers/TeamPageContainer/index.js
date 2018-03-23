import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {fetchTeam} from "ActionCreators";

import TeamPage from "Pages/teamPage/TeamPage";

const mapStateToProps = (state) => {
    return {
        currentTeam: state.currentTeam,
        currentTeamPageIndex: state.selectedOptionIndex.currentTeamPageIndex
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTeam: bindActionCreators(fetchTeam, dispatch),
    }
}

export default
    connect(mapStateToProps, mapDispatchToProps)(TeamPage);