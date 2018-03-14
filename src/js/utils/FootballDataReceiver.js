export default class FootballDataReceiver {
	constructor(urls, onLoadCallback, onErrorCallback) {
		//Array of urls, which will be requested
		this.urls = urls;
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
			.then(response => response.json())
			.then(this.onload)
			//If error occurs, call the provided error callback
			.catch(this.onErrorCallback);
	}
}

//Base function for such functions, as fetchLeaguesTablesData or fetchLeaguesTeamsData
//It means that last must specify the type for the url
function fetchLeaguesData(type, leaguesIds, onLoadCallback, onErrorCallback) {
	//Creating array of urls which will be provided to the fetching function
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