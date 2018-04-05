import { call, put } from "redux-saga/effects";

import { onGetTeamsFromFavoritesSucceeded } from "ActionCreators";

const getTeamsFromLocalStorage = () => {
    const favorites = localStorage.getItem("favorites");
    if (favorites) { return JSON.parse(favorites); }

    return [];
};

export default function* getTeamsFromFavorites() {
    try {
        const teams = yield call(getTeamsFromLocalStorage);
        yield put(onGetTeamsFromFavoritesSucceeded(teams));
    } catch (error) {
        // TODO
        throw new Error();
    }
}
