export function createLeagueTableUrl(leagueId) {
    return "http://api.football-data.org/v1/competitions/"
            + leagueId +"/leagueTable";
}

export function createLeaguesTablesUrl(leagueIds) {
    return leagueIds.map((leagueId) => {
        return createLeagueTableUrl(leagueId)
    });
}