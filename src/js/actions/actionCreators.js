import actionTypes from "./actionTypes";

export function updateSelectedOptionIndex(key, index) {
    return {
        type: actionTypes.SELECTED_OPTION_INDEX_UPDATE_REQUESTED,
        key: key,
        payload: index
    };
}


export function fetchLeague(leagueId) {
    return {
        type: actionTypes.LEAGUE_FETCH_REQUESTED,
        payload: leagueId
    };
}

export function onLeagueFetchSucceeded(data) {
    return {
        type: actionTypes.LEAGUE_FETCH_SUCCEEDED,
        payload: data
    };
}


export function fetchTeams(leagueId) {
    return {
        type: actionTypes.TEAMS_FETCH_REQUESTED,
        payload: leagueId
    };
}

export function onTeamsFetchSucceeded(data) {
    return {
        type: actionTypes.TEAMS_FETCH_SUCCEEDED,
        payload: data
    };
}


export function fetchTeam(teamId) {
    return {
        type: actionTypes.TEAM_FETCH_REQUESTED,
        payload: teamId
    };
}

export function onTeamFetchSucceeded(data) {
    return {
        type: actionTypes.TEAM_FETCH_SUCCEEDED,
        payload: data
    };
}


export function fetchPlayers(playersUrl) {
    return {
        type: actionTypes.PLAYERS_FETCH_REQUESTED,
        payload: playersUrl
    };
}

export function onPlayersFetchSucceeded(data) {
    return {
        type: actionTypes.PLAYERS_FETCH_SUCCEEDED,
        payload: data
    };
}

export function addTeamToFavourites(teamId) {
    return {
        type: actionTypes.ADD_TEAM_TO_FAVOURITES_REQUESTED,
        payload: teamId
    };
}

export function removeTeamFromFavourites(teamId) {
    return {
        type: actionTypes.REMOVE_TEAM_FROM_FAVOURITES_REQUESTED,
        payload: teamId
    };
}


export function getTeamsFromFavourites() {
    return {
        type: actionTypes.GET_TEAMS_FROM_FAVOURITES_REQUESTED
    };
}

export function onGetTeamsFromFavouritesSucceeded(teams) {
    return {
        type: actionTypes.GET_TEAMS_FROM_FAVOURITES_SUCCEEDED,
        payload: teams
    };
}


export function onFetchFailed(error) {
    return {
        type: actionTypes.FETCH_FAILED,
        payload: error
    };
}