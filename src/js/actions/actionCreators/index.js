import actionTypes from "ActionTypes";

export {
    fetchLeague,
    onLeagueFetchSucceeded,
    onLeagueFetchFailed,
    updateLeagueIndex,
} from "./leagueActionCreators";

export {
    fetchTeams,
    onTeamsFetchSucceeded,
    onTeamsFetchFailed,
} from "./teamsActionCreators";

export {
    fetchTeam,
    onTeamFetchSucceeded,
    onTeamFetchFailed,
} from "./teamActionCreators";

export {
    fetchPlayers,
    onPlayersFetchSucceeded,
    onPlayersFetchFailed,
} from "./playersActionCreators";

export {
    fetchFixtures,
    onFixturesFetchSucceeded,
    onFixturesFetchFailed,
    updateFixtureIndex,
} from "./fixturesActionCreators";

export {
    fetchHead2Head,
    onHead2HeadFetchSucceeded,
    onHead2HeadFetchFailed,
} from "./head2HeadActionCreators";

export {
    updateTeamPageIndex,
    updatePlayersPageIndex,
    updateFixturesPageIndex,
} from "./updateIndexActionCreators";

export {
    updateFromDate,
    updateToDate,
} from "./updateDateActionCreators";


export {
    addTeamToFavorites,
    removeTeamFromFavorites,
    getTeamsFromFavorites,
    onGetTeamsFromFavoritesSucceeded,
} from "./favoriteTeamsActionCreators";


export function resetTeamPageIndices() {
    return {
        type: actionTypes.TEAM_PAGE_INDICES_RESET_REQUESTED,
    };
}
