import Game from "./components/Game/Game";
import useStyles from './styles';
import {useDispatch, useSelector} from "react-redux";
import StartSplash from "./components/StartSplash/StartSplash";
import {useEffect} from "react";
import {storePlayer} from "./store/actions/playerActions";
import {actionTypes} from "./store/constants/actionTypes";
import {startSocketLove} from "./service/socketListeners";


function App() {

    const classes = useStyles();
    const player = useSelector(state => state.player.player);
    const letsPlay = useSelector(state => state.game.letsPlay);
    const dispatch = useDispatch();

    useEffect(() =>{
        startSocketLove(dispatch);
        if (localStorage.getItem('player')) {
            dispatch(storePlayer(JSON.parse(localStorage.getItem('player'))));
        }

        if (!localStorage.getItem('clientId'))
        dispatch({type: actionTypes.START_CLIENT});
    },[]);

    return (
        <div className={classes.dixit}>
            {!(player.name && letsPlay) ?
                    <StartSplash letsPlay={letsPlay}/>
                : <Game player={player}/>
            }
        </div>
    )
}

export default App;
