import Hand from "./components/Hand/Hand";
import Table from "./components/Table/Table";
import {useEffect, useState} from "react";
import useStyles from './styles';
import axios from "axios";

function App() {

    const [cards, setCards] = useState([]);
    const [cardsInplay, setCardsinPlay] = useState([]);
    const api = axios.create({baseURL: 'http://localhost:5000/card'})
    const classes = useStyles();

    const getCards = async () => {
        const cardsNeeded = 6-cards.length;
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

    const playCardHandler = (card) => {
        const updatedCardsInPlay = [...cardsInplay, card];
        setCardsinPlay(updatedCardsInPlay);
        setCards(() => cards.filter(cardInHand => (cardInHand._id !== card._id)));
    }

    return (
        <div className={classes.dixit}>
            <h1 style={{margin:'0', color:"white", padding:'3rem'}}>Dixit client starts here ;) </h1>
            <Table cardsInPlay={cardsInplay}/>
            <Hand cards={cards} playCard={playCardHandler}/>
        </div>
    )
        ;
}

export default App;
