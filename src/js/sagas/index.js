import {call, put, takeEvery} from "redux-saga/effects";

import {createLeagueUrl} from "Utilities/fetchingUrlsCreators";
import {createTeamsUrl} from "Utilities/fetchingUrlsCreators";

import {
    updateCurrentLeagueIndex, 
    onLeagueFetchSucceeded,
    onTeamsFetchSucceeded,
    onFetchFailed} from "ActionCreators";

import {fetchUrl} from "Utilities/fetchFootballData";

function* fetchLeague(action) {
    try {
        const leagueUrl = createLeagueUrl(action.payload);
        const data = yield call(fetchUrl, leagueUrl);
        yield put(onLeagueFetchSucceeded(data));
        yield put(updateCurrentLeagueIndex(action.index));
    } catch (error) {
        console.log(error)
        yield put(onFetchFailed(error));
    }
}

function* fetchTeams(action) {
    try {
        const teamsUrl = createTeamsUrl(action.payload);
        const data = yield call(fetchUrl, teamsUrl);
        yield put(onTeamsFetchSucceeded(data));
    } catch (error) {
        yield put(onFetchFailed(error));
    }
}

export default function* rootSaga() {
    yield takeEvery("SELECT_NEW_LEAGUE", fetchLeague);
    yield takeEvery("SELECT_NEW_TEAMS", fetchTeams);
}