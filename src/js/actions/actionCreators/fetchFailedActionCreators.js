import actionTypes from "../actionTypes";

export function onLeagueFetchFailed(error) {
    return {
        type: actionTypes.LEAGUE_FETCH_FAILED,
        payload: error,
    };
}

export function onTeamsFetchFailed(error) {
    return {
        type: actionTypes.TEAMS_FETCH_FAILED,
        payload: error,
    };
}

export function onTeamFetchFailed(error) {
    return {
        type: actionTypes.TEAM_FETCH_FAILED,
        payload: error,
    };
}

export function onPlayersFetchFailed(error) {
    return {
        type: actionTypes.PLAYERS_FETCH_FAILED,
        payload: error,
    };
}

export function onFixturesFetchFailed(error) {
    return {
        type: actionTypes.FIXTURES_FETCH_FAILED,
        payload: error,
    };
}

export function onHead2HeadFailed(error) {
    return {
        type: actionTypes.HEAD_2_HEAD_FETCH_FAILED,
        payload: error,
    };
}
