import {combineReducers} from "redux";

import fetchingErrorOccured from "./fetchingErrorOccured";
import currentLeagueIndex from "./currentLeagueIndex";
import leaguesData from "./leaguesData";
import currentTeams from "./currentTeams";
import currentTeam from "./currentTeam";

export default combineReducers({
    fetchingErrorOccured,
    currentLeagueIndex,
    leaguesData,
    currentTeams,
    currentTeam
});