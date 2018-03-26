export function createLeagueUrl(leagueId) {
    return `http://api.football-data.org/v1/competitions/${
        leagueId}/leagueTable`;
}

export function createTeamsUrl(leagueId) {
    return `http://api.football-data.org/v1/competitions/${
        leagueId}/teams`;
}

export function createTeamUrl(teamId) {
    return `http://api.football-data.org/v1/teams/${
        teamId}`;
}
