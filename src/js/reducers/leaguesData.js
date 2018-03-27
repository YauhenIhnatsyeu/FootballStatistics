import actionTypes from "../actions/actionTypes";

const initialState = {
    league: null,
};

export default function tabs(state = initialState, action) {
    switch (action.type) {
    case actionTypes.LEAGUE_FETCH_SUCCEEDED:
        return { ...state, league: action.payload };

    default:
        return state;
    }
}
