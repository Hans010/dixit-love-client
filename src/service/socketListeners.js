import {socket} from "./socket";
import {useDispatch} from "react-redux";
import {add2Players} from "../store/actions/playerActions";
import {newStoryTeller} from "../store/actions/gameActions";
import {actionTypes} from "../store/constants/actionTypes";

export const startSocketLove = (dispatch) => {

    console.log('socket love is on, baby');

    // players

    socket.on('player joined', (player) => {
        console.log('new player joined!', player);
        dispatch(add2Players(player));
    })

    socket.on('player updated', player => {
        console.log('got updated player ', player);
        dispatch({type: actionTypes.PLAYER_UPDATE, player});
    })

    socket.on('new storyTeller', playerId => {
        dispatch(newStoryTeller(playerId));
    });

    // voting

    socket.on('vote success', () => {
        console.log('vote successful')
    })

    socket.on('vote fail', () => {
        console.log('vote fail')
    })

    socket.on('new round started', (storyTeller) => {

    })


}