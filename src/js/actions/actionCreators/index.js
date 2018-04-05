import actionTypes from "../actionTypes";

export {
    fetchLeague,
    fetchTeams,
    fetchTeam,
    fetchPlayers,
    fetchFixtures,
    fetchHead2Head,
} from "./fetchActionCreators";

export {
    onLeagueFetchSucceeded,
    onTeamsFetchSucceeded,
    onTeamFetchSucceeded,
    onPlayersFetchSucceeded,
    onFixturesFetchSucceeded,
    onHead2HeadFetchSucceeded,
} from "./fetchSucceededActionCreators";

export {
    onLeagueFetchFailed,
    onTeamsFetchFailed,
    onTeamFetchFailed,
    onPlayersFetchFailed,
    onFixturesFetchFailed,
    onHead2HeadFetchFailed,
} from "./fetchFailedActionCreators";

export {
    updateLeagueIndex,
    updateTeamPageIndex,
    updatePlayersPageIndex,
    updateFixtureIndex,
    updateFixturesPageIndex,
} from "./updateIndexActionCreators";

export {
    addTeamToFavorites,
    removeTeamFromFavorites,
    getTeamsFromFavorites,
    onGetTeamsFromFavoritesSucceeded,
} from "./favoriteTeamsActionCreators";

export {
    updateFromDate,
    updateToDate,
} from "./updateDateActionCreators";


export function resetTeamPageIndices() {
    return {
        type: actionTypes.TEAM_PAGE_INDICES_RESET_REQUESTED,
    };
}
