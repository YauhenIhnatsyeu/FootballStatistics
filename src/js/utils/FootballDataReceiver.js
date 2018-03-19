import checkForFetchErrors from "./checkForFetchErrors";

class FootballDataReceiver {
	constructor(urls, onLoadCallback, onErrorCallback) {
		if (typeof urls === "string") {
			this.urls = [urls]
		} else {
			this.urls = urls;
		}

		this.onErrorCallback = onErrorCallback;

		this.result = [];
		//Current index is used to keep track of what tab is rendering now
		this.currentDataFetchingIndex = 0;

		this.fetchInit = {
			headers: {
				"X-Auth-Token": "22cb5922f71544ee9aea4544d3256e40"
			}
		};

		this.onload = (json) => {
			this.result.push(json);
            
			if (this.currentDataFetchingIndex >= this.urls.length - 1) {
				if (this.result.length === 1) {
					this.result = this.result[0];
				}
				
				onLoadCallback(this.result);
				return;
			}

			this.currentDataFetchingIndex++;
			this.fetchNext();
		};
    }
	
    fetch = () => {
        this.fetchNext();
	}
	
	fetchNext = () => {
		fetch(this.urls[this.currentDataFetchingIndex], this.fetchInit)
			.then(response => checkForFetchErrors(response))
			.then(response => response.json())
			.then(this.onload)
			//If error occurs, call the provided error callback
			.catch(this.onErrorCallback);
	}
}

export default function fetchFootballData(urls, onLoadCallback, onErrorCallback) {
	const fdr = new FootballDataReceiver(urls, onLoadCallback, onErrorCallback).fetch();
}

function fetchLeaguesData(type, leaguesIds, onLoadCallback, onErrorCallback) {
	const leaguesUrls = leaguesIds.map((leagueId) => {
		return "http://api.football-data.org/v1/competitions/"
                    + leagueId +"/" + type;
	});

	const fdr = new FootballDataReceiver(leaguesUrls, onLoadCallback, onErrorCallback);
	fdr.fetch();
}

export function fetchLeaguesTablesData(leaguesIds, onLoadCallback, onErrorCallback) {
	fetchLeaguesData("leagueTable", leaguesIds, onLoadCallback, onErrorCallback);
}

export function fetchLeaguesTeamsData(leaguesIds, onLoadCallback, onErrorCallback) {
	fetchLeaguesData("teams", leaguesIds, onLoadCallback, onErrorCallback);
}

export function fetchTeamData(teamId, onLoadCallback, onErrorCallback) {
	const teamUrl = "http://api.football-data.org/v1/teams/" + teamId;
	
	const fdr = new FootballDataReceiver(teamUrl, onLoadCallback, onErrorCallback);
	fdr.fetch();
}