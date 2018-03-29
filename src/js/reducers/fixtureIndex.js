import actionTypes from "../actions/actionTypes";

const initialState = 0;

export default function fixtureIndex(state = initialState, action) {
    switch (action.type) {
    case actionTypes.FIXTURE_INDEX_UPDATE_REQUESTED:
        return action.payload;

    default:
        return state;
    }
}
