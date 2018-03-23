import {combineReducers} from "redux";

import fetchingErrorOccured from "./fetchingErrorOccured";
import selectedOptionIndex from "./selectedOptionIndex";
import leaguesData from "./leaguesData";
import currentTeams from "./currentTeams";
import currentTeam from "./currentTeam";

export default combineReducers({
    fetchingErrorOccured,
    selectedOptionIndex,
    leaguesData,
    currentTeams,
    currentTeam
});