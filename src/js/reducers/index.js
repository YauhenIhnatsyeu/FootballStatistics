import {combineReducers} from "redux";

import fetchingErrorOccured from "./fetchingErrorOccured";
import currentLeagueIndex from "./currentLeagueIndex";
import leaguesData from "./leaguesData";
import currentTeams from "./currentTeams";

export default combineReducers({
    fetchingErrorOccured,
    currentLeagueIndex,
    leaguesData,
    currentTeams
});