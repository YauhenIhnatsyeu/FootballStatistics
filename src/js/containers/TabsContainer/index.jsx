import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {updateTabIndex} from "ActionCreators";

import Tabs from "Components/tabs/Tabs";

const mapStateToProps = (state) => {
    return {
        tabs: state.tabs,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateTabIndex: bindActionCreators(updateTabIndex, dispatch)
    }
}

export default
    connect(mapStateToProps, mapDispatchToProps)(Tabs);