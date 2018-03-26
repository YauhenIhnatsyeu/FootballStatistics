import { call, put } from "redux-saga/effects";

import sorterByJerseyNumber from "Utilities/sorterByJerseyNumber";

import {
    onPlayersFetchSucceeded,
    onFetchFailed,
} from "ActionCreators";

import { fetchUrl } from "Utilities/fetchFootballData";

export default function* fetchPlayers(action) {
    try {
        let data = yield call(fetchUrl, action.payload);
        data = data.players.sort(sorterByJerseyNumber);
        yield put(onPlayersFetchSucceeded(data));
    } catch (error) {
        yield put(onFetchFailed(error));
    }
}