import {actionTypes} from "../constants/actionTypes";

const playerReducer = (state = {
    player: {},
    players: []
}, action) => {
    switch (action.type) {
        case actionTypes.REGISTER_PLAYER:
            // console.log('adding player', action.data);
            let newPlayers = [];
            if (state.players.length > 0) {
                // console.log('players > 0', state.players);
                // if (state.players.every(player => {
                //         console.log()
                //         return player === action.data
                //     }
                // )) {
                    newPlayers = [...state.players, action.data];
                // }
            } else newPlayers = [action.data];
            return {...state, player: action.data, players: [...newPlayers]};


        case actionTypes.UPDATE_PLAYERS:

            console.log('action', action);

            if (state.players.every(player => (
                player !== action.playerJoined
            ))) {
                // console.log('player added to arry', typeof action.playerJoined);
                return {...state, players: [...state.players, ...action.playerArray]};
            } else {
                // console.log('player already exists');
                return state;
            }

        default:
            return state;
    }
}

export default playerReducer;