import {actionTypes} from "../constants/actionTypes";

const gameReducer = (state = {
    story: ''
}, action) => {

    switch (action.type) {
        case actionTypes.SUBMIT_STORY:
            return {...state, story: action?.data || 'sadly, I have no story'};

        case actionTypes.CLEAR_STORY:
            return {...state, story: ''};

        default:
            return state;
    }
}

export default gameReducer;