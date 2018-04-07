import { call } from "redux-saga/effects";

import { addToFavorites } from "Services/favoriteTeamsService";
import getTeamsFromFavorites from "./getTeamsFromFavorites";

export default function* addTeamToFavorites(action) {
    try {
        const team = action.payload;
        yield call(addToFavorites, team);
        yield call(getTeamsFromFavorites);
    } catch (error) {
        // TODO
        throw new Error();
    }
}
