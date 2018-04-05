import { call } from "redux-saga/effects";

const addTeamToLocalStorage = (teamId) => {
    let favorites = localStorage.getItem("favorites");

    if (favorites) {
        favorites = JSON.parse(favorites);
        favorites.push(teamId);
        favorites = JSON.stringify(favorites);
    } else {
        favorites = JSON.stringify([teamId]);
    }

    localStorage.setItem("favorites", favorites);
};

export default function* addTeamToFavorites(action) {
    try {
        yield call(addTeamToLocalStorage, action.payload);
    } catch (error) {
        // TODO
        throw new Error();
    }
}
