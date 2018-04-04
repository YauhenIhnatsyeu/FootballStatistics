import actionTypes from "ActionTypes";

const initialState = false;

export default function teamsFetchingErrorOccured(state = initialState, action) {
    switch (action.type) {
    case actionTypes.TEAMS_FETCH_FAILED:
        return true;

    default:
        return state;
    }
}
