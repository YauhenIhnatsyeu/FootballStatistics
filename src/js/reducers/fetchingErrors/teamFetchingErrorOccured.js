import actionTypes from "ActionTypes";

const initialState = false;

export default function teamFetchingErrorOccured(state = initialState, action) {
    switch (action.type) {
    case actionTypes.TEAM_FETCH_FAILED:
        return true;

    default:
        return state;
    }
}
