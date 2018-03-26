import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
    fetchLeague,
    fetchTeams,
    updateSelectedOptionIndex,
} from "ActionCreators";

import LeagueSelector from "Pages/leaguePage/LeagueSelector";

const mapStateToProps = state => ({
    leaguesData: state.leaguesData,
    leagueIndex: state.selectedOptionsIndeces.leagueIndex,
});

const mapDispatchToProps = dispatch => ({
    updateSelectedOptionIndex: bindActionCreators(updateSelectedOptionIndex, dispatch),
    fetchLeague: bindActionCreators(fetchLeague, dispatch),
    fetchTeams: bindActionCreators(fetchTeams, dispatch),
});

export default
connect(mapStateToProps, mapDispatchToProps)(LeagueSelector);