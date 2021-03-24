import React from 'react';
import useStyles from './styles';


const Card = ({card, playCard}) => {

    const classes = useStyles();

    return (
        <div onClick={(event) => playCard(card)}>
            <img className={classes.card} src={card.imageUrl} alt=""/>
        </div>
    );
}

export default Card;