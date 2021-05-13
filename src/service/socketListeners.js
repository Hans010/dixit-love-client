import {socket} from "./socket";
import {useDispatch} from "react-redux";
import {add2Players} from "../store/actions/playerActions";
import {newStoryTeller} from "../store/actions/gameActions";
import {actionTypes} from "../store/constants/actionTypes";
import {act} from "@testing-library/react";
import {getCards} from "../store/actions/cardsActions";

export const startSocketLove = (dispatch) => {

    console.log('socket love is on, baby');

    // players

    socket.on('player joined', (player) => {
        dispatch(add2Players(player));
    })

    socket.on('player updated', player => {
        dispatch({type: actionTypes.PLAYER_UPDATE, player});
    })

    socket.on('lets play', () => {
        localStorage.setItem('letsPlay', true);
        dispatch({type: actionTypes.LETS_PLAY});
        // dispatch(getCards());
    })

    socket.on('new storyTeller', playerId => {
        console.log('new story teller',  playerId);
        dispatch(newStoryTeller(playerId));
    });

    // voting

    socket.on('vote success', () => {
        console.log('vote successful')
    })

    socket.on('vote fail', () => {
        console.log('vote fail')
    })

    socket.on('start new round', () => {
        dispatch({type: actionTypes.NEW_ROUND})
    })

    socket.on('new story', ({story}) => {
        dispatch({type: actionTypes.SUBMIT_STORY, story});
    })

    socket.on('updated play', (cards) => {
        dispatch({type: actionTypes.UPDATE_PLAY, updatedPlay: cards});
    })

    socket.on('updated scores', scores => {
        console.log('got new scores');
        dispatch({type: actionTypes.UPDATED_SCORES, updatedScores: scores})
    })
}