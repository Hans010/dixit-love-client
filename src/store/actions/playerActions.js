import {actionTypes} from "../constants/actionTypes";
import {createPlayer} from "../../api";
import {socket} from "../../service/socket";
import {startGame} from "./gameActions";

export const registerPlayer = (playerName) => async (dispatch) => {
    try {
        let player = {};
        await createPlayer({name: playerName, clientId: localStorage.getItem('clientId')})
            .then(({data}) => {
                player = data;
                dispatch(storePlayer(data));
                localStorage.setItem('player', JSON.stringify(data));
                dispatch(startGame(player));
            });
    } catch (error) {
        console.log(error);
    }
}

export const playerReady2Play = (playerId) => {
    socket.emit('player ready2Play', playerId);
}

export const add2Players = (playerJoined) => (dispatch) => {
    dispatch({type: actionTypes.UPDATE_PLAYERS, playerArray: [playerJoined]})
}

export const storePlayer = (data) => (dispatch) => {
    dispatch({type: actionTypes.REGISTER_PLAYER, data});
}


