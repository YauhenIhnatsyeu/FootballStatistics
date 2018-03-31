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
    return `https://api.football-data.org/v1/teams/${teamId}/fixtures`;
}

// export function createFixturesUrlWithDate(teamId, dates) {
//     return `https://api.football-data.org/v1/teams/${teamId}/fixtures`;
// }

export function createHead2HeadUrl(fixtureId) {
    return `http://api.football-data.org/v1/fixtures/${fixtureId}?head2head=10`;
}

// const getPastAndNextFromDates = (dates) => {
//     let result = "timeFrame=";

//     const currentDate = new Date();
//     const fromDifference = currentDate - dates.from;
//     const toDifference = currentDate - dates.to;

//     if (fromDifference >= 0) {
//         const daysDiff
//     } else {

//     }

//     if (toDifference >= 0) {

//     } else {
        
//     }
// }
