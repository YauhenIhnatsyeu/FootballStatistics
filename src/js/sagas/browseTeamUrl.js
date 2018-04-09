import { call } from "redux-saga/effects";

import browseUrl from "Clients/browseTeamUrlClient";

export default function* browseTeamUrl(action) {
    try {
        const { currentPath, newPath, history } = action.payload;
        yield call(browseUrl, currentPath, newPath, history);
    } catch (error) {
        console.log(error);
        throw new Error();
    }
}
