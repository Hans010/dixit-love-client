import {actionTypes} from "../constants/actionTypes";

const cardsReducer = (state = {
    hand: [],
    cardsInPlay: [],
    hideCards: true,
    storyTeller: false,
    startNewRound: true
}, action) => {

    switch (action.type) {
        case actionTypes.NEW_ROUND:
            return {
                ...state,
                hand: [...state.hand, ...action?.data],
                cardsInPlay: [],
                storyTeller: false,
                story: '',
                hideCards: true,
                startNewRound: true
            }

        case actionTypes.PLAY_CARD:
            const updatedHand = state.hand.filter(card => card._id !== action?.card?._id);
            return {...state, hand: updatedHand};

        case actionTypes.UPDATE_PLAY:
            return {...state, cardsInPlay: [...action?.updatedPlay]};

        case actionTypes.FINISH_PLAY:
            return {...state, hideCards: false}

        case actionTypes.IS_STORY_TELLER:
            return {...state, storyTeller: true}

        default :
            return state;
    }
}

export default cardsReducer;