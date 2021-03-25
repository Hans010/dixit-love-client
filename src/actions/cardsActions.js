import {actionTypes} from "../constants/actionTypes";
import * as api from '../api';

export const getCards = (cardsNeeded) => async (dispatch) => {

    try {
        const {data} = await api.dealCards(cardsNeeded);
        dispatch({type: actionTypes.NEW_ROUND, data});
    } catch (error) {
        console.log(error);
    }
}

export const playCard = (card) => async (dispatch) => {
    try {
        dispatch({type:actionTypes.PLAY_CARD, card});
    } catch (error) {
        console.log(error);
    }
}