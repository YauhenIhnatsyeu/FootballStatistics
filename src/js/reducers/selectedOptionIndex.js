import actionTypes from "../actions/actionTypes";

const initialState = {
    currentLeagueIndex: 0,
    currentTeamPageIndex: 0
};

export default function selectedOptionIndex(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SELECTED_OPTION_INDEX_UPDATE_REQUEST:
            const newState = Object.assign({}, state);
            newState[action.key] = action.payload;
            return newState;

        default:
            return state;
    }
}