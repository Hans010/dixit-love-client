import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Card from "../Hand/Card/Card";
import useStyles from './styles';
import {voteCard} from "../../store/actions/cardsActions";
import {actionTypes} from "../../store/constants/actionTypes";

const Table = () => {

    const cardsInPlay = useSelector(state => state.cards.cardsInPlay);
    const hideCards = useSelector(state => state.cards.hideCards);
    const cardPlayed = useSelector( state => state.cards.cardPlayed);
    const playerId = useSelector(state => state.player.player._id);
    const playerCount = useSelector(state => state.player.players).length;
    const dispatch = useDispatch();

    useEffect(() => {
        if (cardsInPlay.length === playerCount) shuffleAndRevealCards();
    }, [cardsInPlay]);

    const shuffleAndRevealCards = () => {
       cardsInPlay.sort(() => Math.random() - 0.5);
       dispatch({type: actionTypes.REVEAL_PLAY});
    }

    const classes = useStyles();

    const voteOnCardHandler = (id) => {
        const vote = {
            cardVoted: id,
            playerId: playerId,
            cardPlayed: cardPlayed
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
