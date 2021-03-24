import React, {useEffect, useState} from 'react';
import Card from "../Card/Card";
import useStyles from './styles';

const Table = ({cardsInPlay}) => {

    const classes = useStyles();

    return (
        <div className={classes.table}>
            {cardsInPlay && cardsInPlay.map(card => (
                <Card card={card} key={card._id} />
            ))}
        </div>
    );
}

export default Table;