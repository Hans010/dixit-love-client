import React from 'react';
import useStyles from './styles';
import {useDispatch, useSelector} from "react-redux";
import {actionTypes} from '../../store/constants/actionTypes';
import {getCards} from "../../store/actions/cardsActions";
import {startGame} from "../../api";
import {socket} from "../../service/socket";

const DevHelper = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const cards = useSelector(state => state.cards.hand);

    const newRoundHandler = () => {
        dispatch(getCards(6-cards.length));
        dispatch({type: actionTypes.CLEAR_STORY});
    }

    const revealCardsHandler = () => {
        dispatch({type: actionTypes.FINISH_PLAY});
    }

    const socketHandler = () => {
        console.log('socketing...', socket);
        socket.emit('dixit!', cards[0]);
    }

    socket.on('newDeal', msg => {
        console.log('got a response!!', msg);
    })

    return (
<div className={classes.helperContainer}>
    <h3 className={classes.title}> This is just a helper element</h3>
<div className={classes.buttonRack}>
    <button className={classes.button} onClick={startGame}>Start Game</button>
    <button className={classes.button} onClick={revealCardsHandler}>Reveal cards</button>
    <button className={classes.button} onClick={newRoundHandler}>New Round</button>
    <button className={classes.button} onClick={socketHandler}>Socket to me baby</button>
</div>
</div>
    );
}

export default DevHelper;