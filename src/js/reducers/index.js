import { combineReducers } from "redux";

import fetchingErrorOccured from "./fetchingErrorOccured";
import league from "./league";
import leagueIndex from "./leagueIndex";
import teams from "./teams";
import team from "./team";
import teamPageIndex from "./teamPageIndex";
import players from "./players";
import playersPageIndex from "./playersPageIndex";
import favouriteTeams from "./favouriteTeams";

export default combineReducers({
    fetchingErrorOccured,
    league,
    leagueIndex,
    teams,
    team,
    teamPageIndex,
    players,
    playersPageIndex,
    favouriteTeams,
});
