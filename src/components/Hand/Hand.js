import React, {useEffect, useState} from 'react';
import Card from "../Card/Card";
import useStyles from './styles';
import axios from 'axios';

const Hand = () => {

    const [cards, setCards] = useState([]);
    const api = axios.create({baseURL: 'http://localhost:5000/card'})


    const getCards = async () => {
        const cardsNeeded = 4-cards.length;
        console.log(cardsNeeded);
        try {
            const {data} = await api.get(`/${cardsNeeded}` );
            setCards(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCards();
    }, []);

    const classes = useStyles();

    return (
        <div className={classes.hand}>
            {cards.map(card => (
                <Card imageUrl={card.imageUrl} key={card._id}  />
            ))}
        </div>
    );
}

export default Hand;