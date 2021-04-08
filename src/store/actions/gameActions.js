import {actionTypes} from "../constants/actionTypes";
import * as api from '../../api';
import {socket} from "../../service/socket";

export const startGame = (player) => async (dispatch) => {

    // console.log('asking game to server');
    const {data: game} = await api.startGame(player);
    localStorage.setItem('game', JSON.stringify(game));
    // }

    const playerArray = [...game.players];
    if (playerArray.length > 0) dispatch({type: actionTypes.UPDATE_PLAYERS, playerArray});
    dispatch({type: actionTypes.START_GAME, gameId: game._id});
}

export const newRound = () => async (dispatch) => {
    socket.emit('new round');
    socket.on('new storyTeller', playerId => {
        dispatch({type: actionTypes.NEW_STORYTELLER, playerId})
    })
}