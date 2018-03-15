import checkForFetchErrors from "./checkForFetchErrors";

class FootballDataReceiver {
	constructor(urls, onLoadCallback, onErrorCallback) {
		//urls - an array of urls, which will be requested
		//If urls is not an array, but a single string of url
		if (typeof urls === "string") {
			//create an array with this url
			this.urls = [urls]
		} else {
			this.urls = urls;
		}

		this.onErrorCallback = onErrorCallback;

		this.result = [];
		//For achieving rigth order of tabs and content rendering
		//current index is used to keep track of what tab is rendering now
		this.currentDataFetching = 0;

		//Setting additional information before requesting
		this.fetchInit = {
			headers: {
				//Allows to fetch json from the server
				"X-Auth-Token": "22cb5922f71544ee9aea4544d3256e40"
			}
		};

		//Is called when new json was fetched
		this.onload = (json) => {
			//Push new fetched data to result array
			this.result.push(json);
            
			//If all data was fetched, call the callback with providing the result
			if (this.currentDataFetching >= this.urls.length - 1) {
				//If result contains only 1 object, return this object only
				if (this.result.length === 1) {
					this.result = this.result[0];
				}
				
				onLoadCallback(this.result);
				return;
			}

			//After new data was fetched we need to increment currentDataFetching
			this.currentDataFetching++;
			//and fetch new data
			this.fetchNext();
		};
    }
	
	
	//Starts fetching
    fetch = () => {
        this.fetchNext();
	}
	
	//Fetches next url
	//Url is next because we incremented this.currentDataFetching
	fetchNext = () => {
		fetch(this.urls[this.currentDataFetching], this.fetchInit)
			.then(response => checkForFetchErrors(response))
			.then(response => response.json())
			.then(this.onload)
			//If error occurs, call the provided error callback
			.catch(this.onErrorCallback);
	}
}

export default function fetchFootballData(urls, onLoadCallback, onErrorCallback) {
	const fdr = new FootballDataReceiver(urls, onLoadCallback, onErrorCallback);
	fdr.fetch();
}

//Base function for such functions, as fetchLeaguesTablesData or fetchLeaguesTeamsData
//It means that last must specify the type for the url
function fetchLeaguesData(type, leaguesIds, onLoadCallback, onErrorCallback) {
	//Creating an array of urls which will be provided to the fetching function
	//Leagues ids are included in these urls
	const leaguesUrls = leaguesIds.map((leagueId) => {
		return "http://api.football-data.org/v1/competitions/"
                    + leagueId +"/" + type;
	});

	//Creating new object that will fetch legues data
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
	//Creating a url of the team
	//Team id is included in this urls
	const teamUrl = "http://api.football-data.org/v1/teams/" + teamId;
	
	//Creating new object that will fetch team data
	const fdr = new FootballDataReceiver(teamUrl, onLoadCallback, onErrorCallback);
	fdr.fetch();
}