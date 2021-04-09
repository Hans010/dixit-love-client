import React from 'react';
import useStyles from './styles';
import {useDispatch, useSelector} from "react-redux";
import {actionTypes} from '../../store/constants/actionTypes';
import {finishRound, getCards} from "../../store/actions/cardsActions";
import {newRound} from "../../store/actions/gameActions";

const DevHelper = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const cards = useSelector(state => state.cards.hand);

    const newCardsHandler = () => {
        dispatch(getCards(6-cards.length));
    }

    const revealCardsHandler = () => {
        dispatch({type: actionTypes.REVEAL_PLAY});
    }

    const clearRound = () => {
        console.log('celaring story');
        dispatch({type: actionTypes.CLEAR_STORY});
        finishRound();
    }

    const clearLocalStorage = () => {
        localStorage.clear();
    }

    const newRoundHandler = () => {
        newRound();
    }


    return (
<div className={classes.helperContainer}>
    <h3 className={classes.title}> This is just a helper element</h3>
<div className={classes.buttonRack}>
    <button className={classes.button} onClick={clearLocalStorage}>clear storage</button>
    <button className={classes.button} onClick={revealCardsHandler}>Reveal cards</button>
    <button className={classes.button} onClick={newCardsHandler}>New cards</button>
    <button className={classes.button}  onClick={newRoundHandler}>New round</button>
    <button className={classes.button} onClick={clearRound}>Clear Round</button>
</div>
</div>
    );
}

export default DevHelper;