import {actionTypes} from "../constants/actionTypes";

const playerReducer = (state = {
    player: {
        _id: 'noID'
    },
    storyTeller: false,
    storyTellerName: 'no one',
    players: []
}, action) => {
    switch (action.type) {
        case actionTypes.REGISTER_PLAYER:
            // console.log('adding player', action.data);
            let newPlayers = [];
            if (state.players.length > 0) {
                newPlayers = [...state.players, action.data];
            } else newPlayers = [action.data];
            return {...state, player: action.data, players: newPlayers};

        case actionTypes.PLAYER_UPDATE:
            return {...state, player: action.player};

        case actionTypes.UPDATE_PLAYERS:

            // console.log('action', action);

            const playerMesh = [...state.players].concat(action.playerArray);

            const newPlayerSet = [];

            playerMesh.map(player => {
                    if (newPlayerSet.every(addedPlayer =>
                        addedPlayer._id !== player._id
                    )) newPlayerSet.push(player);
                }
            );

            return {...state, players: newPlayerSet};

        case actionTypes.NEW_STORYTELLER:

            let isStoryTeller = false;

            if (action.storyTeller === state.player._id) isStoryTeller = true;

            const {name} = state.players.filter(player => {
                    return player._id === action.storyTeller
                }
            )[0];

            return {...state, storyTellerName: name, storyTeller: isStoryTeller}

        default:
            return state;
    }
}

export default playerReducer;