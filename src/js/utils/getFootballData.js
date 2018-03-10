export function getFootballData(footballDataTypeParam, id, callback) {
    //Old XMLHttpRequest doesn't support onload
    const XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

    const xhr = new XHR();
    
    //footballDataTypeParam is the type of football data that is passed to the function
    switch(footballDataTypeParam) {
        //footballDataType is local variable, in which all types are defined
        //Depending on requested data types corresponding url is set
        case footballDataType.COMPETITION:
            xhr.open("GET", "http://api.football-data.org/v1/competitions/?season=2017", true);
            break;
        case footballDataType.LEAGUE:
            xhr.open("GET", "http://api.football-data.org/v1/competitions/" + id + "/leagueTable", true);
            break;
        default:
            xhr.open("GET", "http://api.football-data.org/v1/competitions/?season=2017", true);
    }

    //Allows to fetch json from the server
    xhr.setRequestHeader("X-Auth-Token", "22cb5922f71544ee9aea4544d3256e40");

    //Setting callback method to data onload event
    xhr.onload = () => callback(JSON.parse(xhr.responseText));

    xhr.send(); 
}

const footballDataType = {
    COMPETITION: "COMPETITION",
    LEAGUE: "LEAGUE"
}