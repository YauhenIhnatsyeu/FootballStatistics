import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import LeaguePage from "Pages/leaguePage/LeaguePage";

import {
    fetchTeams,
    updateLeagueIndex,
} from "ActionCreators";

const mapStateToProps = state => ({
    leagueIndex: state.leagueIndex,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ updateLeagueIndex, fetchTeams }, dispatch);

export default
connect(mapStateToProps, mapDispatchToProps)(LeaguePage);
