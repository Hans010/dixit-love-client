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

        case actionTypes.REVEAL_PLAY:
            return {...state, hideCards: false}

        case actionTypes.IS_STORY_TELLER:
            return {...state, storyTeller: true}

        case 'CLEAR_TABLE':
            console.log('clearing table');
            return {...state, cardsInPlay: []};

        default :
            return state;
    }
}

export default cardsReducer;