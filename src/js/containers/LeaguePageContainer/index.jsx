import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {updateTabIndex, requestFetch} from "ActionCreators";

import LeaguePage from "Pages/leaguePage/LeaguePage";

const mapStateToProps = (state) => {
    return {
        app: state.app,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateTabIndex: bindActionCreators(updateTabIndex, dispatch),
        requestFetch: bindActionCreators(requestFetch, dispatch)
    }
}

export default
    connect(mapStateToProps, mapDispatchToProps)(LeaguePage);