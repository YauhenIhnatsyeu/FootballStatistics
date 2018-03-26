import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {updateSelectedOptionIndex} from "ActionCreators";

import Tabs from "Components/tabs/Tabs";

const mapStateToProps = (state) => {
    return {
        selectedOptionsIndeces: state.selectedOptionsIndeces
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateSelectedOptionIndex: bindActionCreators(updateSelectedOptionIndex, dispatch)
    };
};

export default
    connect(mapStateToProps, mapDispatchToProps)(Tabs);