export function createLeagueUrl(leagueId) {
    return `http://api.football-data.org/v1/competitions/${leagueId}/leagueTable`;
}

export function createTeamsUrl(leagueId) {
    return `http://api.football-data.org/v1/competitions/${leagueId}/teams`;
}

export function createTeamUrl(teamId) {
    return `http://api.football-data.org/v1/teams/${teamId}`;
}

export function createPlayersUrl(teamUrl) {
    return `${teamUrl}/players`;
}

export function createFixturesUrl(teamId) {
    return `https://api.football-data.org/v1/teams/${teamId}/fixtures/`;
}
