export function createLeagueUrl(id) {
    return `http://api.football-data.org/v1/competitions/${id}/leagueTable`;
}

export function createTeamsUrl(id) {
    return `http://api.football-data.org/v1/competitions/${id}/teams`;
}

export function createTeamUrl(id) {
    return `http://api.football-data.org/v1/teams/${id}`;
}
