import actionTypes from "./actionTypes";

export function updateSelectedOptionIndex(key, index) {
    return {
        type: actionTypes.SELECTED_OPTION_INDEX_UPDATE_REQUEST,
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


export function onFetchFailed(error) {
    return {
        type: actionTypes.FETCH_FAILED,
        payload: error
    };
}