import actionTypes from "ActionTypes";

const initialState = false;

export default function playersFetchingErrorOccured(state = initialState, action) {
    switch (action.type) {
    case actionTypes.PLAYERS_FETCH_FAILED:
        return true;

    default:
        return state;
    }
}
