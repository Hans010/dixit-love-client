import {socket} from "./socket";
import {useDispatch} from "react-redux";
import {add2Players} from "../store/actions/playerActions";

export const startSocketLove = (dispatch) => {

    console.log('socket love is on, baby');

    socket.on('player joined', (player) => {
        console.log('new player joined!');
        dispatch(add2Players(player));
    })
}