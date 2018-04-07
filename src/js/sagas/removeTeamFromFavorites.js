import { call } from "redux-saga/effects";

import { removeFromFavorites } from "Services/favoriteTeamsService";
import getTeamsFromFavorites from "./getTeamsFromFavorites";

export default function* removeTeamFromFavorites(action) {
    try {
        const team = action.payload;
        yield call(removeFromFavorites, team);
        yield call(getTeamsFromFavorites);
    } catch (error) {
        // TODO
        throw new Error();
    }
}
