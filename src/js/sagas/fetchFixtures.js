import { call, put } from "redux-saga/effects";

import {
    onFixturesFetchSucceeded,
    onFetchFailed,
} from "ActionCreators";

import { createFixturesUrl } from "Utilities/fetchingUrlsCreators";

import fetchUrl from "Utilities/fetchFootballData";

export default function* fetchFixtures(action) {
    try {
        const fixturesUrl = createFixturesUrl(action.payload);
        const data = yield call(fetchUrl, fixturesUrl);
        yield put(onFixturesFetchSucceeded(data));
    } catch (error) {
        yield put(onFetchFailed(error));
    }
}
