import {call, put} from "redux-saga/effects";

import {createTeamsUrl} from "Utilities/fetchingUrlsCreators";

import extractTeamIdFromUrl from "Utilities/extractTeamIdFromUrl";

import {
    onTeamsFetchSucceeded,
    onFetchFailed
} from "ActionCreators";

import {fetchUrl} from "Utilities/fetchFootballData";

export default function* fetchTeams(action) {
    try {
        const teamsUrl = createTeamsUrl(action.payload);
        const data = yield call(fetchUrl, teamsUrl);
        const teams = data.teams;
        yield call(addIdToEachTeam, teams);
        yield put(onTeamsFetchSucceeded(teams));
    } catch (error) {
        yield put(onFetchFailed(error));
    }
}

const addIdToEachTeam = (teams) => {
    teams.map((team) => {
        const teamId = extractTeamIdFromUrl(team._links.self.href);
        team.id = teamId;
    });
}; 