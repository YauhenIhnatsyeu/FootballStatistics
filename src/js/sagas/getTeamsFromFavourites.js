import {call, put} from "redux-saga/effects";

import {
    getTeamsFromFavourites,
    onGetTeamsFromFavouritesSucceeded
} from "ActionCreators";

export default function* addTeamToFavourites(action) {
    try {
        const teams = yield call(getTeamsFromLocalStorage, action.payload);
        yield put(onGetTeamsFromFavouritesSucceeded(teams));
    } catch (error) {
    }
}

const getTeamsFromLocalStorage = () => {
    let favourites = localStorage.getItem("favourites");
    
    if (favourites)
        return JSON.parse(favourites);

    return [];
}