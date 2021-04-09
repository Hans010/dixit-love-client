import {actionTypes} from "../constants/actionTypes";

const cardsReducer = (state = {
    hand: [],
    cardsInPlay: [],
    hideCards: true,
    getNewCards: false
}, action) => {

    switch (action.type) {
        case actionTypes.NEW_ROUND:
            return {
                ...state,
                cardsInPlay: [],
                story: '',
                hideCards: true,
                startNewRound: true,
                getNewCards: true
            }

        case actionTypes.GET_NEW_CARDS:
            return {
                ...state,
                hand: [...state.hand, ...action?.data],
                getNewCards: false
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