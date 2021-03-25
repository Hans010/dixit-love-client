import {actionTypes} from "../constants/actionTypes";

const cardsReducer = (state = {
    hand: [],
    cardsInPlay: [],
    storyTeller: false,
    story: '',
}, action) => {

    switch (action.type) {
        case actionTypes.UPDATE_HAND:
            console.log('from reducer',action.data);
            return {...state, hand:[...state.hand, ...action?.data]}
        default :
            return state;
    }
}

export default cardsReducer;