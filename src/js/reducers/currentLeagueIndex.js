import actionTypes from "../actions/actionTypes";

const initialState = 0;

export default function currentLeagueIndex(state = initialState, action) {
    switch (action.type) {
        case actionTypes.UPDATE_CURRENT_LEAGUE_INDEX:
            return action.payload;

        default:
            return state;
    } 
}