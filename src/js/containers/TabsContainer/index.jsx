import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {selectNewLeague} from "ActionCreators";

import Tabs from "Components/tabs/Tabs";

const mapStateToProps = (state) => {
    return {
        leaguesData: state.leaguesData,
        currentLeagueIndex: state.currentLeagueIndex,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectNewLeague: bindActionCreators(selectNewLeague, dispatch)
    }
}

export default
    connect(mapStateToProps, mapDispatchToProps)(Tabs);