import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import LeaguePage from "Pages/leaguePage/LeaguePage";

import {
    fetchTeams,
    updateLeagueIndex,
    getTeamsFromFavorites,
    addTeamToFavorites,
    removeTeamFromFavorites,
} from "ActionCreators";

const mapStateToProps = state => ({
    leagueIndex: state.leagueIndex,
    teams: state.teams,
    teamsFetchingErrorOccured: state.teamsFetchingErrorOccured,
    favoriteTeams: state.favoriteTeams,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        updateLeagueIndex,
        fetchTeams,
        getTeamsFromFavorites,
        addTeamToFavorites,
        removeTeamFromFavorites,
    }, dispatch);

export default
connect(mapStateToProps, mapDispatchToProps)(LeaguePage);
