import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
    fetchLeague,
    fetchTeams,
    updateSelectedOptionIndex,
} from "ActionCreators";

import LeagueSelector from "Pages/leaguePage/LeagueSelector";

const mapStateToProps = state => ({
    leagueIndex: state.selectedOptionsIndeces.leagueIndex,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        updateSelectedOptionIndex,
        fetchLeague,
        fetchTeams,
    }, dispatch);

export default
connect(mapStateToProps, mapDispatchToProps)(LeagueSelector);
