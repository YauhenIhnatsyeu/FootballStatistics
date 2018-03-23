import {call, put} from "redux-saga/effects";

import {createTeamUrl} from "Utilities/fetchingUrlsCreators";

import {
    onTeamFetchSucceeded,
    onFetchFailed
} from "ActionCreators";

import {fetchUrl} from "Utilities/fetchFootballData";

export default function* fetchTeam(action) {
    try {
        const teamUrl = createTeamUrl(action.payload);
        const data = yield call(fetchUrl, teamUrl);
        yield put(onTeamFetchSucceeded(data));
    } catch (error) {
        yield put(onFetchFailed(error));
    }
}