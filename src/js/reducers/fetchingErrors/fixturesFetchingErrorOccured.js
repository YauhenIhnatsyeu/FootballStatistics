import actionTypes from "ActionTypes";

const initialState = false;

export default function fixturesFetchingErrorOccured(state = initialState, action) {
    switch (action.type) {
    case actionTypes.FIXTURES_FETCH_FAILED:
        return true;

    default:
        return state;
    }
}
