import actionTypes from "../actions/actionTypes";

const initialState = {
    leagueIndex: 0,
    teamPageIndex: 0,
    playersPagingControlsPageIndex: 0
};

export default function selectedOptionIndeces(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SELECTED_OPTION_INDEX_UPDATE_REQUESTED:
            const newState = Object.assign({}, state);
            newState[action.key] = action.payload;
            return newState;

        default:
            return state;
    }
}