import actionTypes from "./actionTypes";

export function selectNewLeague(leagueId, index) {
    return {
        type: actionTypes.SELECT_NEW_LEAGUE,
        payload: leagueId,
        index: index
    };
}

export function updateCurrentLeagueIndex(index) {
    return {
        type: actionTypes.UPDATE_CURRENT_LEAGUE_INDEX,
        payload: index
    };
}

export function onLeagueFetchSucceeded(data) {
    return {
        type: actionTypes.LEAGUE_FETCH_SUCCEEDED,
        payload: data
    };
}


export function selectNewTeams(leagueId) {
    return {
        type: actionTypes.SELECT_NEW_TEAMS,
        payload: leagueId
    };
}

export function onTeamsFetchSucceeded(data) {
    return {
        type: actionTypes.TEAMS_FETCH_SUCCEEDED,
        payload: data
    };
}


export function onFetchFailed(error) {
    return {
        type: actionTypes.FETCH_FAILED,
        payload: error
    };
}