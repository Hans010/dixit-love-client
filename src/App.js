import Hand from "./components/Hand/Hand";
import Table from "./components/Table/Table";
import DevHelper from "./components/DevHelper/DevHelper";
import Story from "./components/Story/Story";
import useStyles from './styles';
import {useDispatch, useSelector} from "react-redux";
import StartSplash from "./components/StartSplash/StartSplash";
import {useEffect} from "react";
import {registerPlayer, storePlayer} from "./store/actions/playerActions";
import {startGame} from "./store/actions/gameActions";
import {Fragment} from "react";

function App() {

    const classes = useStyles();
    const playerName = useSelector(state => state.player.name);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('app rnder');
        dispatch(startGame());
        if (localStorage.getItem('player')) {
            dispatch(storePlayer(JSON.parse(localStorage.getItem('player'))));
        }
    }, []);

    return (
        <div className={classes.dixit}>
            {!playerName ?
                    <StartSplash/>
                : <>
                    <h1 style={{margin: '0', color: "white", padding: '3rem'}}>Dixit client starts here ;) </h1>
                    <Story/>
                    <Table/>
                    <Hand/>
                    <DevHelper/>
                </>
            }
        </div>
    )
}

export default App;
