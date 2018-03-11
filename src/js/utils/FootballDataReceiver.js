//Old XMLHttpRequest doesn't support onload
const XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

export default class FootballDataReceiver {
    constructor(urls, callback) {
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
                callback(this.result);
                return;
            }

            //After new data was fetched we need to increment currentDataFetching
            this.currentDataFetching++;
            //and fetch new data
            fetchNext(this.xhr, this.urls[this.currentDataFetching]);
        }
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