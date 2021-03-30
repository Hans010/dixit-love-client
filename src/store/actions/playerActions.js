import {actionTypes} from "../constants/actionTypes";
import {createPlayer} from "../../api";
import {v4 as uuidv4} from 'uuid';


export const registerPlayer = (playerName) => async (dispatch) => {
    try {
        await createPlayer({name: playerName, clientId: uuidv4()})
            .then(({data}) => {
                console.log('getting player from server', data);
                dispatch(storePlayer(data));
                localStorage.setItem('player', JSON.stringify(data));
            });
    } catch (error) {
        console.log(error);
    }
}


export const storePlayer = (player) => (dispatch) => {
    dispatch({type: actionTypes.REGISTER_PLAYER, player});
}
