import {actionTypes} from "../constants/actionTypes";

const cardsReducer = (state = {
    hand: [],
    cardsInPlay: [],
    storyTeller: false,
    story: '',
}, action) => {

    switch (action.type) {
        case actionTypes.UPDATE_HAND:
            return {...state, hand: [...state.hand, ...action?.data]}

        case actionTypes.PLAY_CARD:
            console.log('reducer', action?.card);
            const newHand = state.hand.filter(card => card._id !== action?.card?._id);
            return {...state, hand: newHand, cardsInPlay: [...state.cardsInPlay, action?.card]};

        default :
            return state;
    }
}

export default cardsReducer;