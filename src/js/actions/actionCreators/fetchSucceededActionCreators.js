import actionTypes from "../actionTypes";

export function onLeagueFetchSucceeded(data) {
    return {
        type: actionTypes.LEAGUE_FETCH_SUCCEEDED,
        payload: data,
    };
}

export function onTeamsFetchSucceeded(data) {
    return {
        type: actionTypes.TEAMS_FETCH_SUCCEEDED,
        payload: data,
    };
}

export function onTeamFetchSucceeded(data) {
    return {
        type: actionTypes.TEAM_FETCH_SUCCEEDED,
        payload: data,
    };
}

export function onPlayersFetchSucceeded(data) {
    return {
        type: actionTypes.PLAYERS_FETCH_SUCCEEDED,
        payload: data,
    };
}

export function onFixturesFetchSucceeded(data) {
    return {
        type: actionTypes.FIXTURES_FETCH_SUCCEEDED,
        payload: data,
    };
}

export function onHead2HeadFetchSucceeded(data) {
    return {
        type: actionTypes.HEAD_2_HEAD_FETCH_SUCCEEDED,
        payload: data,
    };
}
