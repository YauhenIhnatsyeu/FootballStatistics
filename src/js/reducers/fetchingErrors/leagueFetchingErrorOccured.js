import actionTypes from "ActionTypes";

const initialState = false;

export default function leagueFetchingErrorOccured(state = initialState, action) {
    switch (action.type) {
    case actionTypes.LEAGUE_FETCH_FAILED:
        return true;

    default:
        return state;
    }
}
