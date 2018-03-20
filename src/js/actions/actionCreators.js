import actionTypes from "./actionTypes";

export function updateTabIndex(index) {
    return {
        type: actionTypes.TAB_INDEX_UPDATE_REQUESTED,
        payload: index
    };
}

export function requestFetch(data) {
    return {
        type: actionTypes.FETCH_REQUESTED,
        payload: data
    };
}

export function onFetchSucceeded(data) {
    return {
        type: actionTypes.FETCH_SUCCEEDED,
        payload: data
    };
}

export function onFetchFailed(error) {
    return {
        type: actionTypes.FETCH_FAILED,
        payload: error
    };
}