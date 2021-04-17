import {actionTypes} from "../constants/actionTypes";
import * as api from '../../api';
import {socket} from "../../service/socket";

export const getCards = (cardsNeeded) => async (dispatch) => {
    try {
        const {data} = await api.dealCards(cardsNeeded);
        dispatch({type: actionTypes.GET_NEW_CARDS, data});
    } catch (error) {
        console.log(error);
    }
}

export const playCard = (card) => async (dispatch) => {
    socket.emit('card played', card);
    dispatch({type: actionTypes.PLAY_CARD, card});
}

export const voteCard = (cardVote) => async (dispatch) => {
    socket.emit('card voted', cardVote);

    socket.on('vote results', (votes) => {
        dispatch({type: actionTypes.VOTE_RESULTS, voteResults: votes});
    })
}

export const finishRound = () => {
    socket.emit('round finished');
}

