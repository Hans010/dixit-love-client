import React, {useEffect, useState} from 'react';
import Card from "../Card/Card";
import useStyles from './styles';
import {useDispatch, useSelector} from "react-redux";
import {getCards} from "../../actions/cardsActions";

const Hand = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const cards = useSelector(state => state.cards.hand);

    useEffect(() => {
        dispatch(getCards(6));
    }, []);

    // const playCardHandler = (card) => {
    //     const updatedCardsInPlay = [...cardsInplay, card];
    //     setCardsinPlay(updatedCardsInPlay);
    //     setCards(() => cards.filter(cardInHand => (cardInHand._id !== card._id)));
    // }

    console.log(' from hand ', cards);
    return (
        <div className={classes.handWrapper}>
            <div className={classes.hand}>
                {cards.map(card => (
                    <Card
                        card={card}
                        key={card._id}
                        // playCard={playCardHandler}
                    />
                ))}
            </div>
        </div>
    );
}

export default Hand;