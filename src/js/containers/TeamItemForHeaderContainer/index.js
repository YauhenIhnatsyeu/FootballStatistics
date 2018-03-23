import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {fetchTeam} from "ActionCreators";

import TeamItemForHeader from "Pages/teamPage/TeamItemForHeader";

const mapStateToProps = (state) => {
    return {
        team: state.team
    };
}

export default
    connect(mapStateToProps)(TeamItemForHeader);