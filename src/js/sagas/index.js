import fetchLeague from "./fetchLeague";
import fetchTeams from "./fetchTeams";
import fetchTeam from "./fetchTeam";
import fetchPlayers from "./fetchPlayers";
import addTeamToFavourites from "./addTeamToFavourites";
import removeTeamFromFavourites from "./removeTeamFromFavourites";
import getTeamsFromFavourites from "./getTeamsFromFavourites";

import {takeEvery} from "redux-saga/effects";

export default function* rootSaga() {
    yield takeEvery("LEAGUE_FETCH_REQUESTED", fetchLeague);
    yield takeEvery("TEAMS_FETCH_REQUESTED", fetchTeams);
    yield takeEvery("TEAM_FETCH_REQUESTED", fetchTeam);
    yield takeEvery("PLAYERS_FETCH_REQUESTED", fetchPlayers);
    yield takeEvery("ADD_TEAM_TO_FAVOURITES_REQUESTED", addTeamToFavourites);
    yield takeEvery("REMOVE_TEAM_FROM_FAVOURITES_REQUESTED", removeTeamFromFavourites);
    yield takeEvery("GET_TEAMS_FROM_FAVOURITES_REQUESTED", getTeamsFromFavourites);
}