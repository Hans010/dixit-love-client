import {actionTypes} from "../constants/actionTypes";
import * as api from '../../api';

export const startGame = () => async (dispatch) => {
    console.log('starting game.....');
    if (localStorage.getItem('gameId')) {
        console.log('already have a gameId');
        return dispatch({type:actionTypes.START_GAME, gameId: localStorage.getItem('gameId')});
    }
    console.log('genereating a new game');
    const {data} = await api.startGame();
    console.log('gameId', data);
    dispatch({type:actionTypes.START_GAME, gameId: data});
    localStorage.setItem('gameId', data);
}