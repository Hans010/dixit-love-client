import {actionTypes} from "../constants/actionTypes";
import * as api from '../../api';

export const startGame = () => async (dispatch) => {
    let gameId = '';
    if (localStorage.getItem('gameId')) {
        gameId = localStorage.getItem('gameId');
    }
    const {data} = await api.startGame({gameId: gameId});
    dispatch({type: actionTypes.START_GAME, gameId: data});
    localStorage.setItem('gameId', data);
    return dispatch({type: actionTypes.START_GAME, gameId: localStorage.getItem('gameId')});
}