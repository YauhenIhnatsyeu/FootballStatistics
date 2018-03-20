import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {updateTabIndex} from "ActionCreators";

import TablePage from "Pages/tablePage/TablePage";

const mapStateToProps = (state) => {
    return {
        app: state.app,
        tabs: state.tabs
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateTabIndex: bindActionCreators(updateTabIndex, dispatch)
    }
}

export default
    connect(mapStateToProps, mapDispatchToProps)(TablePage);