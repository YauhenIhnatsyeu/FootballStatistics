import {connect} from "react-redux";

import TeamItemForHeader from "Pages/teamPage/TeamItemForHeader";

const mapStateToProps = (state) => {
    return {
        team: state.team
    };
};

export default
    connect(mapStateToProps)(TeamItemForHeader);