import {actionTypes} from "../constants/actionTypes";
import {v4 as uuidv4} from 'uuid';

const gameReducer = (state = {
    gameId: '',
    scoreBoard: {},
    clientId: '',
}, action) => {
    switch (action.type) {
        case actionTypes.START_CLIENT:
            const clientUUID = uuidv4();
            localStorage.setItem('clientId', clientUUID);
            return {...state, clientId: clientUUID};

        case actionTypes.START_GAME:
            return {...state, gameId: action?.gameId};

        default:
            return state;
    }
}

export default gameReducer;