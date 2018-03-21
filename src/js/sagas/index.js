import {call, put, takeEvery} from "redux-saga/effects";

import {onFetchSucceeded, onFetchFailed} from "ActionCreators";

import {fetchUrl} from "Utilities/fetchFootballData";

function* fetchFootballData(action) {
    try {
        const data = yield call(fetchUrl, action.payload);
        yield put(onFetchSucceeded(data));
    } catch (error) {
        yield put(onFetchFailed(error));
    }
}

export default function* rootSaga() {
    yield takeEvery("FETCH_REQUESTED", fetchFootballData);
}