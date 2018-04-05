import leagueActionTypes from "./leagueActionTypes";

import teamsActionTypes from "./teamsActionTypes";

import teamActionTypes from "./teamActionTypes";

import playersActionTypes from "./playersActionTypes";

import fixturesActionTypes from "./fixturesActionTypes";

import head2HeadActionTypes from "./head2HeadActionTypes";

import updateIndexActionTypes from "./updateIndexActionTypes";

import updateDateActionTypes from "./updateDateActionTypes";

import favoriteTeamsActionTypes from "./favoriteTeamsActionTypes";

const teamPageIndicesResetRequested = {
    TEAM_PAGE_INDICES_RESET_REQUESTED: "TEAM_PAGE_INDICES_RESET_REQUESTED",
};

export default Object.assign(
    {},
    leagueActionTypes,
    teamsActionTypes,
    teamActionTypes,
    playersActionTypes,
    fixturesActionTypes,
    head2HeadActionTypes,
    updateIndexActionTypes,
    updateDateActionTypes,
    favoriteTeamsActionTypes,
    teamPageIndicesResetRequested,
);
