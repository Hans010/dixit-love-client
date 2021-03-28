import {actionTypes} from "../constants/actionTypes";

const gameReducer = (state = {
    gameId: '',
    scoreBoard: {},
}, action) => {
    switch (action.type) {
        case actionTypes.START_GAME:
            return {...state, gameId: action?.gameId};

        default:
            return state;
    }
}

export default gameReducer;