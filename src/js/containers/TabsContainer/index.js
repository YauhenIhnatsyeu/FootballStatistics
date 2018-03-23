import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {updateSelectedOptionIndex} from "ActionCreators";

import Tabs from "Components/tabs/Tabs";

const mapStateToProps = (state) => {
    return {
        selectedOptionIndex: state.selectedOptionIndex
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateSelectedOptionIndex: bindActionCreators(updateSelectedOptionIndex, dispatch)
    }
}

export default
    connect(mapStateToProps, mapDispatchToProps)(Tabs);