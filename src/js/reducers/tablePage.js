import actionTypes from "../actions/actionTypes";

const initialState = {
    leaguesTables: undefined,
    errorOccured: false
};

export default function tabs(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_SUCCEEDED:
            return {...state, leaguesTables: action.payload};

        case actionTypes.FETCH_FAILED:
            return {...state, errorOccured: true};

        default:
            return state;
    } 
}