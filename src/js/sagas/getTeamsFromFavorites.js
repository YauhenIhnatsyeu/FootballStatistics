import { call, put } from "redux-saga/effects";

import { getFromFavorites } from "Services/favoriteTeamsService";
import { onGetTeamsFromFavoritesSucceeded } from "ActionCreators";

export default function* getTeamsFromFavorites() {
    try {
        const teams = yield call(getFromFavorites);
        yield put(onGetTeamsFromFavoritesSucceeded(teams));
    } catch (error) {
        // TODO
        throw new Error();
    }
}
