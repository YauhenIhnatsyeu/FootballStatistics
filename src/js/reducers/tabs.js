import actionTypes from "../actions/actionTypes";

const initialState = {
    currentTabIndex: 0
};

export default function tabs(state = initialState, action) {
    switch (action.type) {
        case actionTypes.TAB_INDEX_UPDATE_REQUESTED:
            return {...state, currentTabIndex: action.payload};

        default:
            return state;
    } 
}