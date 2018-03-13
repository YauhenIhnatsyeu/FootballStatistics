//Old XMLHttpRequest doesn't support onload
const XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

export default class FootballDataReceiver {
    constructor(urls, onLoadCallback, onErrorCallback) {
        //Array of urls, which will be requested
        this.urls = urls;

        this.result = [];
        this.xhr = new XHR();
        //For achieving rigth order of tabs and content rendering
        //current index is used to keep track of what tab is rendering now
        this.currentDataFetching = 0;

        this.xhr.onload = () => {
            //Push new fetched data to result array
            this.result.push(JSON.parse(this.xhr.responseText));
            
            //If all data was fetched, call the callback with providing the result
            if (this.currentDataFetching >= this.urls.length - 1) {
                onLoadCallback(this.result);
                return;
            }

            //After new data was fetched we need to increment currentDataFetching
            this.currentDataFetching++;
            //and fetch new data
            fetchNext(this.xhr, this.urls[this.currentDataFetching]);
        };

        this.xhr.onerror = onErrorCallback;
    }

    fetch = () => {
        //Start fetching
        fetchNext(this.xhr, this.urls[this.currentDataFetching]);
    }
}

//Fetches data from url provided to this function using XMLHttpRequest
function fetchNext(xhr, url) {
    xhr.open("GET", url, true);

    //Allows to fetch json from the server
    xhr.setRequestHeader("X-Auth-Token", "22cb5922f71544ee9aea4544d3256e40");

    xhr.send(); 
}

//Base function for such functions, as fetchLeaguesTablesData or fetchLeaguesTeamsData
//It means that last must specify the type for the url
function fetchLeaguesData(type, leaguesIds, onLoadCallback, onErrorCallback) {
    //Creating array of urls which will be provided to the fetching function
    //Leagues ids are included in these urls
    const leaguesUrls = leaguesIds.map((leagueId) => {
        return "http://api.football-data.org/v1/competitions/"
                    + leagueId +"/" + type
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