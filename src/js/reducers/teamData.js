import actionTypes from "ActionTypes";

const initialState = {
    team: null,
    teamPageIndex: 0,
};

export default function teamData(state = initialState, action) {
    switch (action.type) {
    case actionTypes.TEAM_FETCH_SUCCEEDED:
        return { ...state, team: action.payload };

    case actionTypes.TEAM_PAGE_INDEX_UPDATE:
        return { ...state, teamPageIndex: action.payload };

    default:
        return state;
    }
}
