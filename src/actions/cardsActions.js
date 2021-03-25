import {actionTypes} from "../constants/actionTypes";
import * as api from '../api';

export const getCards = (cardsNeeded) => async (dispatch) => {

    try {
        const {data} = await api.dealCards(cardsNeeded);
        dispatch({type: actionTypes.UPDATE_HAND, data});
    } catch (error) {
        console.log(error);
    }
}