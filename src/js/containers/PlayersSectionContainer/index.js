import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import PlayersSection from "PlayersPageSections/playersSection/PlayersSection";

const mapStateToProps = (state) => {
    return {
        team: state.currentTeam
    };
}

export default
    connect(mapStateToProps)(PlayersSection);