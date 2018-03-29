import actionTypes from "./actionTypes";

export function fetchLeague(leagueId) {
    return {
        type: actionTypes.LEAGUE_FETCH_REQUESTED,
        payload: leagueId,
    };
}

export function onLeagueFetchSucceeded(data) {
    return {
        type: actionTypes.LEAGUE_FETCH_SUCCEEDED,
        payload: data,
    };
}


export function fetchTeams(leagueId) {
    return {
        type: actionTypes.TEAMS_FETCH_REQUESTED,
        payload: leagueId,
    };
}

export function onTeamsFetchSucceeded(data) {
    return {
        type: actionTypes.TEAMS_FETCH_SUCCEEDED,
        payload: data,
    };
}


export function fetchTeam(teamId) {
    return {
        type: actionTypes.TEAM_FETCH_REQUESTED,
        payload: teamId,
    };
}

export function onTeamFetchSucceeded(data) {
    return {
        type: actionTypes.TEAM_FETCH_SUCCEEDED,
        payload: data,
    };
}


export function fetchPlayers(teamUrl) {
    return {
        type: actionTypes.PLAYERS_FETCH_REQUESTED,
        payload: teamUrl,
    };
}

export function onPlayersFetchSucceeded(data) {
    return {
        type: actionTypes.PLAYERS_FETCH_SUCCEEDED,
        payload: data,
    };
}


export function fetchFixtures(teamId) {
    return {
        type: actionTypes.FIXTURES_FETCH_REQUESTED,
        payload: teamId,
    };
}

export function onFixturesFetchSucceeded(data) {
    return {
        type: actionTypes.FIXTURES_FETCH_SUCCEEDED,
        payload: data,
    };
}


export function updateLeagueIndex(index) {
    return {
        type: actionTypes.LEAGUE_INDEX_UPDATE_REQUESTED,
        payload: index,
    };
}

export function updateTeamPageIndex(index) {
    return {
        type: actionTypes.TEAM_PAGE_INDEX_UPDATE_REQUESTED,
        payload: index,
    };
}

export function updatePlayersPageIndex(index) {
    return {
        type: actionTypes.PLAYERS_PAGE_INDEX_UPDATE_REQUESTED,
        payload: index,
    };
}

export function updateFixturesIndex(index) {
    return {
        type: actionTypes.FIXTURES_INDEX_UPDATE_REQUESTED,
        payload: index,
    };
}

export function updateFixturesPageIndex(index) {
    return {
        type: actionTypes.FIXTURES_PAGE_INDEX_UPDATE_REQUESTED,
        payload: index,
    };
}


export function addTeamToFavourites(teamId) {
    return {
        type: actionTypes.ADD_TEAM_TO_FAVOURITES_REQUESTED,
        payload: teamId,
    };
}

export function removeTeamFromFavourites(teamId) {
    return {
        type: actionTypes.REMOVE_TEAM_FROM_FAVOURITES_REQUESTED,
        payload: teamId,
    };
}


export function getTeamsFromFavourites() {
    return {
        type: actionTypes.GET_TEAMS_FROM_FAVOURITES_REQUESTED,
    };
}

export function onGetTeamsFromFavouritesSucceeded(teams) {
    return {
        type: actionTypes.GET_TEAMS_FROM_FAVOURITES_SUCCEEDED,
        payload: teams,
    };
}


export function onFetchFailed(error) {
    return {
        type: actionTypes.FETCH_FAILED,
        payload: error,
    };
}
