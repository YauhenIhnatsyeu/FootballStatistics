import actionTypes from "../actionTypes";

export function addTeamToFavourites(teamId) {
    return {
        type: actionTypes.ADD_TEAM_TO_FAVOURITES_REQUESTED,
        payload: teamId,
    };
}

export function removeTeamFromFavourites(teamId) {
    return {
        type: actionTypes.REMOVE_TEAM_FROM_FAVOURITES_REQUESTED,
        payload: teamId,
    };
}


export function getTeamsFromFavourites() {
    return {
        type: actionTypes.GET_TEAMS_FROM_FAVOURITES_REQUESTED,
    };
}

export function onGetTeamsFromFavouritesSucceeded(teams) {
    return {
        type: actionTypes.GET_TEAMS_FROM_FAVOURITES_SUCCEEDED,
        payload: teams,
    };
}
