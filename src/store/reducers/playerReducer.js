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
            return {...state, player: action.data, players: newPlayers};


        case actionTypes.UPDATE_PLAYERS:

            // console.log('action', action);

            const playerMesh = [...state.players].concat(action.playerArray);

            console.log('playerMesh', playerMesh);

            const newPlayerSet = [];

            playerMesh.map(player => {
            if (newPlayerSet.every(addedPlayer =>
                addedPlayer._id !== player._id
            )) newPlayerSet.push(player);
                }
            );

            console.log('newPlayerSet', newPlayerSet);

            // if (state.players.every(player => (
            //     player !== action.playerJoined
            // ))) {
            //     // console.log('player added to arry', player === action);
            //
            //     return {...state, players: [...state.players, ...action.playerArray]};
            // } else {
            //     // console.log('player already exists');
            //     return state;
            // }
            return {...state, players: newPlayerSet};

        default:
            return state;
    }
}

export default playerReducer;