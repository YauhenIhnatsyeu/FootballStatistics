import {call, put} from "redux-saga/effects";

import {createTeamsUrl} from "Utilities/fetchingUrlsCreators";

import {
    onTeamsFetchSucceeded,
    onFetchFailed
} from "ActionCreators";

import {fetchUrl} from "Utilities/fetchFootballData";

export default function* fetchTeams(action) {
    try {
        const teamsUrl = createTeamsUrl(action.payload);
        const data = yield call(fetchUrl, teamsUrl);
        yield put(onTeamsFetchSucceeded(data));
    } catch (error) {
        yield put(onFetchFailed(error));
    }
}