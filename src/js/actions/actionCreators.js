import actionTypes from "./actionTypes";

export function updateTabIndex(index) {
    return {
        type: actionTypes.UPDATE_TAB_INDEX,
        payload: index
    };
}