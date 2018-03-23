import {combineReducers} from "redux";

import fetchingErrorOccured from "./fetchingErrorOccured";
import selectedOptionIndeces from "./selectedOptionIndeces";
import leaguesData from "./leaguesData";
import teams from "./teams";
import team from "./team";
import players from "./players";
import itemsOnOnePageCount from "./itemsOnOnePageCount";
import favouriteTeams from "./favouriteTeams";

export default combineReducers({
    fetchingErrorOccured,
    selectedOptionIndeces,
    leaguesData,
    teams,
    team,
    players,
    itemsOnOnePageCount,
    favouriteTeams
});