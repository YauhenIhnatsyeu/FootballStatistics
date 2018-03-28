import actionTypes from "../actions/actionTypes";

const initialState = 0;

export default function playersPageIndex(state = initialState, action) {
    switch (action.type) {
    case actionTypes.PLAYERS_PAGE_INDEX_UPDATE_REQUESTED:
        return action.payload;

    default:
        return state;
    }
}
