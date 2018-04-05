import { call } from "redux-saga/effects";

const removeTeamFromLocalStorage = (teamId) => {
    let favorites = localStorage.getItem("favorites");

    if (favorites) {
        favorites = JSON.parse(favorites);
        const indexOfTeamId = favorites.indexOf(teamId);

        if (indexOfTeamId !== -1) {
            favorites.splice(indexOfTeamId, 1);
            favorites = JSON.stringify(favorites);
            localStorage.setItem("favorites", favorites);
        }
    }
};

export default function* removeTeamFromFavorites(action) {
    try {
        yield call(removeTeamFromLocalStorage, action.payload);
    } catch (error) {
        // TODO
        throw new Error();
    }
}
