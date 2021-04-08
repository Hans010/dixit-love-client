import {actionTypes} from "../constants/actionTypes";

const roundReducer = (state = {
    instruction: '',
    story: '',
    isPlayerStoryTeller: false,
}, action) => {

    switch (action.type) {
        case actionTypes.SUBMIT_STORY:
            return {...state, story: action?.story || 'sadly, I have no story'};

        case actionTypes.CLEAR_STORY:
            return {...state, story: ''};

        default:
            return state;
    }
}


export default roundReducer;