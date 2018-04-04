import actionTypes from "../actionTypes";

export function updateFromDate(date) {
    return {
        type: actionTypes.FROM_DATE_UPDATE_REQUESTED,
        payload: date,
    };
}

export function updateToDate(date) {
    return {
        type: actionTypes.TO_DATE_UPDATE_REQUESTED,
        payload: date,
    };
}
