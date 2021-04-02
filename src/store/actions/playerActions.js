import {actionTypes} from "../constants/actionTypes";
import {createPlayer} from "../../api";

export const registerPlayer = (playerName) => async (dispatch) => {
    try {
        await createPlayer({name: playerName, clientId: localStorage.getItem('clientId')})
            .then(({data}) => {
                dispatch(storePlayer(data));
                localStorage.setItem('player', JSON.stringify(data));
            });
    } catch (error) {
        console.log(error);
    }
}

export const add2Players = (playerJoined) => (dispatch) => {
    dispatch({type: actionTypes.UPDATE_PLAYERS, playerArray: [playerJoined]})
}

export const storePlayer = (data) => (dispatch) => {
    dispatch({type: actionTypes.REGISTER_PLAYER, data});
}


