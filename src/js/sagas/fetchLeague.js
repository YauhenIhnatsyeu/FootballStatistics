import { call, put } from "redux-saga/effects";

import { createLeagueUrl } from "Utilities/fetchingUrlsCreators";

import getLeague from "Services/leagueService";

import {
    onLeagueFetchSucceeded,
    onLeagueFetchFailed,
} from "ActionCreators";

export default function* fetchLeague(action) {
    try {
        const leagueId = action.payload;
        const league = yield call(getLeague, leagueId);
        yield put(onLeagueFetchSucceeded(league));
    } catch (error) {
        console.log(error);
        yield put(onLeagueFetchFailed(error));
    }
}
