import actionTypes from "../actionTypes";

export function fetchLeague(leagueId) {
    return {
        type: actionTypes.LEAGUE_FETCH_REQUESTED,
        payload: leagueId,
    };
}

export function fetchTeams(leagueId) {
    return {
        type: actionTypes.TEAMS_FETCH_REQUESTED,
        payload: leagueId,
    };
}

export function fetchTeam(teamId) {
    return {
        type: actionTypes.TEAM_FETCH_REQUESTED,
        payload: teamId,
    };
}

export function fetchPlayers(teamUrl) {
    return {
        type: actionTypes.PLAYERS_FETCH_REQUESTED,
        payload: teamUrl,
    };
}

export function fetchFixtures(teamId, dates) {
    return {
        type: actionTypes.FIXTURES_FETCH_REQUESTED,
        payload: { teamId, dates },
    };
}

export function fetchHead2Head(fixtureId) {
    return {
        type: actionTypes.HEAD_2_HEAD_FETCH_REQUESTED,
        payload: fixtureId,
    };
}
