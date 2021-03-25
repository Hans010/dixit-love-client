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
            // console.log('update');
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
            // console.log('play');
            const updatedHand = state.hand.filter(card => card._id !== action?.card?._id);
            return {...state, hand: updatedHand, cardsInPlay: [...state.cardsInPlay, action?.card]};

        case actionTypes.FINISH_PLAY:
            // console.log('finish');
            return {...state, hideCards: false}

        case actionTypes.IS_STORY_TELLER:
            // console.log('isStoryTeller');
            return {...state, storyTeller: true}

        default :
            return state;
    }
}

export default cardsReducer;