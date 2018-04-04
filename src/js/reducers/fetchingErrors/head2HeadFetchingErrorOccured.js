import actionTypes from "ActionTypes";

const initialState = false;

export default function head2HeadFetchingErrorOccured(state = initialState, action) {
    switch (action.type) {
    case actionTypes.HEAD_2_HEAD_FETCH_FAILED:
        return true;

    default:
        return state;
    }
}
