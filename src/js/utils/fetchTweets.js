import checkForFetchErrors from "./checkForFetchErrors";

export default function fetchTweets(text, onLoadHandler, onErrorhandler) {
    const url =
        "https://api.twitter.com/1.1/search/tweets.json?q="
            + text + "&result_type=recent&count=10";

    const fetchInit = {
        headers: {
            //Authorization: {
                oauth_consumer_key: "8JA6CiQzkYhZN06jowVhGaJcs",
                oauth_token: "920005862076420097-6hVpFIEETrpApodQkJcOUryIXfoSVkS"
            //}
        }
    }

    fetch(url, fetchInit)
        .then(response => checkForFetchErrors(response))
        .then(response => response.json())
        .then(onLoadHandler)
        //If error occurs, call the provided error callback
        .catch(onErrorCallback);
}