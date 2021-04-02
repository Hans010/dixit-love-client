import Hand from "./components/Hand/Hand";
import Table from "./components/Table/Table";
import DevHelper from "./components/DevHelper/DevHelper";
import TopDashboard from "./components/TopDashboard/TopDashboard";
import useStyles from './styles';
import {useDispatch, useSelector} from "react-redux";
import StartSplash from "./components/StartSplash/StartSplash";
import {useEffect} from "react";
import {registerPlayer, storePlayer} from "./store/actions/playerActions";
import {startGame} from "./store/actions/gameActions";
import {startSocketLove} from "./service/socketListeners";
import {actionTypes} from "./store/constants/actionTypes";

function App() {

    const classes = useStyles();
    const playerName = useSelector(state => state.player.player.name);
    const dispatch = useDispatch();

    useEffect(() => {
        startSocketLove(dispatch);
        dispatch(startGame());
        if (localStorage.getItem('player')) {
            dispatch(storePlayer(JSON.parse(localStorage.getItem('player'))));
        }
        dispatch({type: actionTypes.START_CLIENT});
    }, []);

    return (
        <div className={classes.dixit}>
            {!playerName ?
                    <StartSplash/>
                : <>
                    <h1 style={{margin: '0', color: "white", padding: '3rem'}}>Dixit client starts here ;) </h1>
                    <TopDashboard/>
                    <Table/>
                    <Hand/>
                    <DevHelper/>
                </>
            }
        </div>
    )
}

export default App;
