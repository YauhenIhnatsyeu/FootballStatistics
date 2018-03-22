import fetchLeague from "./fetchLeague";
import fetchTeams from "./fetchTeams";
import fetchTeam from "./fetchTeam";

import {takeEvery} from "redux-saga/effects";

export default function* rootSaga() {
    yield takeEvery("LEAGUE_FETCH_REQUESTED", fetchLeague);
    yield takeEvery("TEAMS_FETCH_REQUESTED", fetchTeams);
    yield takeEvery("TEAM_FETCH_REQUESTED", fetchTeam);
}