import actionTypes from "ActionTypes";

const initialState = 0;

export default function playersPageIndex(state = initialState, action) {
    switch (action.type) {
    case actionTypes.PLAYERS_PAGE_INDEX_UPDATE_REQUESTED:
        return action.payload;

    case actionTypes.TEAM_PAGE_INDICES_RESET_REQUESTED:
        return initialState;

    default:
        return state;
    }
}
