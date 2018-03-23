import actionTypes from "../actions/actionTypes";

const initialState = {
    leaguesIds: [445, 452, 455, 456, 450],
    leaguesTitles: [
        "English Premier League", "German 1. Bundesliga",
        "Spanish Primera", "Italian Serie A", "French League 1"
    ],
    league: null
};

export default function tabs(state = initialState, action) {
    switch (action.type) {
        case actionTypes.LEAGUE_FETCH_SUCCEEDED:
            return {...state, league: action.payload};

        default:
            return state;
    } 
}