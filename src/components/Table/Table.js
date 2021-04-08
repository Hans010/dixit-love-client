import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Card from "../Hand/Card/Card";
import useStyles from './styles';
import {voteCard} from "../../store/actions/cardsActions";

const Table = () => {

    const cardsInPlay = useSelector(state => state.cards.cardsInPlay);
    const hideCards = useSelector(state => state.cards.hideCards);
    const playerId = useSelector(state => state.player.player._id);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('change in cards played', cardsInPlay.length);
    }, [cardsInPlay]);

    const classes = useStyles();

    const voteOnCardHandler = (id) => {
        const vote = {
            cardId: id,
            playerId: playerId
        }
        console.log('cardVoted', vote);
        dispatch(voteCard(vote));
    }

    return (
        <div className={classes.table}>
            {cardsInPlay && cardsInPlay.map(card => (
                <Card imageUrl={card.imageUrl} key={card._id} hideCard={hideCards} playCard={() => voteOnCardHandler(card._id)}/>
            ))}
        </div>
    );
}

export default Table;