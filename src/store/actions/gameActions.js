import {actionTypes} from "../constants/actionTypes";
import * as api from '../../api';
import {socket} from "../../service/socket";

export const startGame = (player) => async (dispatch) => {

    const {data: game} = await api.startGame(player);
    localStorage.setItem('game', JSON.stringify(game));

    const playerArray = [...game.players];
    if (playerArray.length > 0) dispatch({type: actionTypes.UPDATE_PLAYERS, playerArray});
    dispatch({type: actionTypes.START_GAME, gameId: game._id});
}

export const newRound = ()  => {
    socket.emit('new round');
}

export const newStoryTeller = (storyTeller) => async (dispatch) => {
    dispatch({type: actionTypes.NEW_STORYTELLER, storyTeller})
    dispatch({type: actionTypes.CLEAR_STORY});
}