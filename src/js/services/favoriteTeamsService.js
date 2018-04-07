import { getValue, pushValue, removeValue } from "Helpers/localStorageHelper";

export function getFromFavorites() {
    return getValue("favorites") || [];
}

export function addToFavorites(team) {
    if (team.id) {
        pushValue("favorites", team.id);
    }
}

export function removeFromFavorites(team) {
    if (team.id) {
        removeValue("favorites", team.id);
    }
}
