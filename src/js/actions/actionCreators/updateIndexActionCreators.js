import actionTypes from "../actionTypes";

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

export function updateFixtureIndex(index) {
    return {
        type: actionTypes.FIXTURE_INDEX_UPDATE_REQUESTED,
        payload: index,
    };
}

export function updateFixturesPageIndex(index) {
    return {
        type: actionTypes.FIXTURES_PAGE_INDEX_UPDATE_REQUESTED,
        payload: index,
    };
}
