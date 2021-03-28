import {actionTypes} from "../constants/actionTypes";
import {createPlayer} from "../../api";


export const registerPlayer = (playerName) => async (dispatch) => {
    try {
        const {data} = await createPlayer({name: playerName});
        dispatch({type: actionTypes.REGISTER_PLAYER, data});
    } catch (error) {
        console.log(error);
    }
}