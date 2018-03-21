export async function fetchUrl(url) {
	const fetchInit = {
		headers: {
			"X-Auth-Token": "22cb5922f71544ee9aea4544d3256e40"
		}
	};
	const response = await fetch(url, fetchInit);
	return await response.json();
}

// export async function fetchUrls(urls) {
// 	const result = [];
// 	for (let i = 0; i < urls.length; i++) {
// 		result.push(await fetchNext(urls[i]));
// 	}
// 	return result;
// }

function fetchLeaguesData(type, leaguesId) {
	const leaguesUrl = 
		"http://api.football-data.org/v1/competitions/"
			+ leaguesId +"/" + type;
	return fetchFootballData(leaguesUrl);
}

export function fetchLeaguesTablesData(leaguesId) {
	return fetchLeaguesData("leagueTable", leaguesId);
}

export function fetchLeaguesTeamsData(leaguesIds, onLoadCallback, onErrorCallback) {
	fetchLeaguesData("teams", leaguesIds, onLoadCallback, onErrorCallback);
}

export function fetchTeamData(teamId, onLoadCallback, onErrorCallback) {
	const teamUrl = "http://api.football-data.org/v1/teams/" + teamId;
	
	fetchFootballData(teamUrl, onLoadCallback, onErrorCallback);
}