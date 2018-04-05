import actionTypes from "ActionTypes";

const initialState = null;

export default function league(state = initialState, action) {
    switch (action.type) {
    case actionTypes.LEAGUE_FETCH_SUCCEEDED:
        return action.payload;

    default:
        return state;
    }
}
