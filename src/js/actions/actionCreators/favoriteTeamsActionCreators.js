import actionTypes from "../actionTypes";

export function addTeamToFavorites(teamId) {
    return {
        type: actionTypes.ADD_TEAM_TO_FavoriteS_REQUESTED,
        payload: teamId,
    };
}

export function removeTeamFromFavorites(teamId) {
    return {
        type: actionTypes.REMOVE_TEAM_FROM_FavoriteS_REQUESTED,
        payload: teamId,
    };
}


export function getTeamsFromFavorites() {
    return {
        type: actionTypes.GET_TEAMS_FROM_FavoriteS_REQUESTED,
    };
}

export function onGetTeamsFromFavoritesSucceeded(teams) {
    return {
        type: actionTypes.GET_TEAMS_FROM_FavoriteS_SUCCEEDED,
        payload: teams,
    };
}
