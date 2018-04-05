import actionTypes from "../actions/actionTypes";

const initialState = [];

export default function favoriteTeams(state = initialState, action) {
    switch (action.type) {
    case actionTypes.GET_TEAMS_FROM_FavoriteS_SUCCEEDED:
        return action.payload;

    default:
        return state;
    }
}
