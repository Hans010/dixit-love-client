import React from 'react';
import {useSelector} from "react-redux";
import Card from "../Hand/Card/Card";
import useStyles from './styles';

const Table = () => {

    const cardsInPlay = useSelector(state => state.cards.cardsInPlay);
    const hideCards = useSelector(state => state.cards.hideCards);

    const classes = useStyles();

    return (
        <div className={classes.table}>
            {cardsInPlay && cardsInPlay.map(card => (
                <Card imageUrl={card.imageUrl} key={card._id} hideCard={hideCards}/>
            ))}
        </div>
    );
}

export default Table;