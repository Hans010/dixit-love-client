import React, {useState, useEffect} from 'react';
import axios from 'axios';

const CardCreator = (props) => {


    const api = axios.create({baseURL: "http://localhost:5000/card"});

    const addHandler = async () => {


        for (let i = 0; i < 157; i++) {

            const newCard = {
                "playedBy": "",
                "storyTeller": false,
                "imageUrl": `https://dixit-cards.s3.eu-west-3.amazonaws.com/${i}.jpg`,
            }

            try {
                const response = await api.post("/newCard", newCard);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
    }


    return (
        <div>
            <h2>CArds from db</h2>
            <button onClick={addHandler}>CLick</button>
        </div>
    )
        ;
}

export default CardCreator;