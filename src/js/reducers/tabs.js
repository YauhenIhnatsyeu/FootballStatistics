import actionTypes from "../actions/actionTypes";

const initialState = {
    currentTabIndex: 0
};

export default function tabs(state = initialState, action) {
    switch (action.type) {
        case actionTypes.UPDATE_TAB_INDEX:
            return {...state, currentTabIndex: action.payload};

        default:
            return state;
    } 
}