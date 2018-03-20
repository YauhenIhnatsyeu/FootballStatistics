import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {updateTabIndex, requestFetch} from "ActionCreators";

import TablePage from "Pages/tablePage/TablePage";

const mapStateToProps = (state) => {
    return {
        app: state.app,
        tabs: state.tabs,
        tablePage: state.tablePage
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateTabIndex: bindActionCreators(updateTabIndex, dispatch),
        requestFetch: bindActionCreators(requestFetch, dispatch)
    }
}

export default
    connect(mapStateToProps, mapDispatchToProps)(TablePage);