import React, {Fragment, useEffect} from 'react';
import useStyles from './styles';
import TopDashboard from "../TopDashboard/TopDashboard";
import Table from "../Table/Table";
import Hand from "../Hand/Hand";
import DevHelper from "../DevHelper/DevHelper";
import {startSocketLove} from "../../service/socketListeners";
import {startGame} from "../../store/actions/gameActions";
import {useDispatch} from "react-redux";

const Game = ({player}) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        startSocketLove(dispatch);
        dispatch(startGame(player));
    }, []);

    return (
        <Fragment>
            <h1 style={{margin: '0', color: "white", padding: '3rem'}}>Dixit client starts here ;) </h1>
            <TopDashboard/>
            <Table/>
            <Hand/>
            <DevHelper/>
        </Fragment>
    );
}
export default Game;