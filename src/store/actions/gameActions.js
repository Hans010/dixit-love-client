import {actionTypes} from "../constants/actionTypes";
import * as api from '../../api';

export const startGame = () => async (dispatch) => {
    let game = {};

    // checks game ID from local storage

    // console.log('asking game to server');
    const {data} = await api.startGame();
    localStorage.setItem('game', JSON.stringify(data));
    game = data;
    // }

    const playerArray = [...game.players];
    console.log('game actions playerarray', playerArray);
    if (playerArray.length > 0) dispatch({type: actionTypes.UPDATE_PLAYERS, playerArray});
    dispatch({type: actionTypes.START_GAME, gameId: game._id});
}