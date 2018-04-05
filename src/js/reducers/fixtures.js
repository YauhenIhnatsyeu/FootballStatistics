import actionTypes from "ActionTypes";

const initialState = null;

export default function fixtures(state = initialState, action) {
    switch (action.type) {
    case actionTypes.FIXTURES_FETCH_SUCCEEDED:
        return action.payload;

    default:
        return state;
    }
}
