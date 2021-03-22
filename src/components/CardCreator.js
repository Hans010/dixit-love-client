import React, {useState, useEffect} from 'react';
import axios from 'axios';

import useStyles from './styles';

const CardCreator = (props) => {

    const classes = useStyles();

    const [cards, setCards] = useState([]);

    const api = axios.create({baseURL: "http://localhost:5000/card"});

    const getCards = async () => {
        try {
            const {data} = await api.get("/cards");
            setCards(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCards();
    }, [])

   /* const addHandler = async () => {


        for (let i = 2; i < 15; i++) {

            const newCard = {
                "playedBy": "",
                "storyTeller": false,
                "imageUrl": `https://dixit-cards.s3.eu-west-3.amazonaws.com/Dixit_CARTAS/${i}.jpg`,
            }

            console.log(newCard)

            try {
                const response = await api.post("/newCard", newCard);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
    }
*/

    return (
        <div>
            <h2>CArds from db</h2>
            <div className={classes.cardBoard}>
                {cards.map(card => (
                    <img className={classes.card} src={card.imageUrl} alt=""/>
                ))}
            </div>
            {/*<button onClick={addHandler}>CLick</button>*/}
        </div>
    )
        ;
}

export default CardCreator;