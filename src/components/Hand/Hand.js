import React, {useEffect} from 'react';
import Card from "./Card/Card";
import useStyles from './styles';
import {useDispatch, useSelector} from "react-redux";
import {getCards, playCard} from "../../store/actions/cardsActions";

const Hand = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const cards = useSelector(state => state.cards.hand);
    const getNewCards = useSelector(state => state.cards.getNewCards);

    useEffect(() => {
        if (getNewCards) fetchNewCards(6-cards.length);
    }, [getNewCards]);

    const fetchNewCards = (cardsNeeded) => {
        console.log('getting new cards');
        dispatch(getCards(cardsNeeded));
    };

    const playCardHandler = (card) => {
        card.playedBy = JSON.parse(localStorage.getItem('player'))._id;
        if(cards.length <6) return;
        dispatch(playCard(card));
    }

    return (
        <div className={classes.handWrapper}>
            <div className={classes.hand}>
                {cards.map(card => (
                    <Card
                        imageUrl={card.imageUrl}
                        key={card._id}
                        playCard={() => playCardHandler(card)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Hand;