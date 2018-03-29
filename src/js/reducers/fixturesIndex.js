import actionTypes from "../actions/actionTypes";

const initialState = 0;

export default function fixturesIndex(state = initialState, action) {
    switch (action.type) {
    case actionTypes.FIXTURES_INDEX_UPDATE_REQUESTED:
        return action.payload;

    default:
        return state;
    }
}
