import actionTypes from "../actions/actionTypes";

const initialState = {
    leagueIndex: 0,
    teamPageIndex: 0,
    playersPagingControlsPageIndex: 0
};

export default function selectedOptionsIndeces(state = initialState, action) {
    const newState = Object.assign({}, state);
    
    switch (action.type) {
        case actionTypes.SELECTED_OPTION_INDEX_UPDATE_REQUESTED:
            
            newState[action.key] = action.payload;
            return newState;

        default:
            return state;
    }
}