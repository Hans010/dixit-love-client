import React, {useEffect, useState} from 'react';
import Card from "../Card/Card";
import useStyles from './styles';
import {useDispatch, useSelector} from "react-redux";
import {getCards, playCard} from "../../actions/cardsActions";

const Hand = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const cards = useSelector(state => state.cards.hand);

    useEffect(() => {
        dispatch(getCards(6));
    }, []);

    const playCardHandler = (card) => {
        if(cards.length <6) return;
        dispatch(playCard(card));
    }

    return (
        <div className={classes.handWrapper}>
            <div className={classes.hand}>
                {cards.map(card => (
                    <Card
                        card={card}
                        key={card._id}
                        playCard={playCardHandler}
                    />
                ))}
            </div>
        </div>
    );
}

export default Hand;