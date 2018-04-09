import actionTypes from "ActionTypes";

const initialState = null;

export default function team(state = initialState, action) {
    switch (action.type) {
    case actionTypes.TEAM_FETCH_SUCCEEDED:
        return action.payload;

    default:
        return state;
    }
}
