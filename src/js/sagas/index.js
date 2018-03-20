import {call, put, takeEvery} from "redux-saga/effects";

import {onFetchSucceeded, onFetchFailed} from "ActionCreators";

import {fetchUrls} from "Utilities/fetchFootballData";

function* fetchFootballData(action) {
    try {
        const data = yield call(fetchUrls, action.payload);
        yield put(onFetchSucceeded(data));
    } catch (error) {
        yield put(onFetchFailed(error));
    }
}

export default function* rootSaga() {
    yield takeEvery("FETCH_REQUESTED", fetchFootballData);
}