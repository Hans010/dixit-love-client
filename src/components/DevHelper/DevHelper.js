import React from 'react';
import useStyles from './styles';
import {useDispatch, useSelector} from "react-redux";
import {actionTypes} from '../../store/constants/actionTypes';
import {finishRound, getCards} from "../../store/actions/cardsActions";

const DevHelper = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const cards = useSelector(state => state.cards.hand);

    const newRoundHandler = () => {
        dispatch(getCards(6-cards.length));
        dispatch({type: actionTypes.CLEAR_STORY});
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

    return (
<div className={classes.helperContainer}>
    <h3 className={classes.title}> This is just a helper element</h3>
<div className={classes.buttonRack}>
    <button className={classes.button} onClick={clearLocalStorage}>clear storage</button>
    <button className={classes.button} onClick={revealCardsHandler}>Reveal cards</button>
    <button className={classes.button} onClick={newRoundHandler}>New Round</button>
    <button className={classes.button}  disabled>Socket to me baby</button>
    <button className={classes.button} onClick={clearRound}>Clear Round</button>
</div>
</div>
    );
}

export default DevHelper;