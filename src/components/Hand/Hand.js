import React, {useEffect, useState} from 'react';
import Card from "../Card/Card";
import useStyles from './styles';
import axios from 'axios';

const Hand = ({cards, playCard}) => {



    const classes = useStyles();


    return (
        <div className={classes.handWrapper}>
            <div className={classes.hand}>
                {cards.map(card => (
                    <Card card={card} key={card._id} playCard={playCard}/>
                ))}
            </div>
        </div>
    );
}

export default Hand;