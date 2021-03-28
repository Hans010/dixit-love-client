import React from 'react';
import useStyles from './styles';
import backImage from '../../../assets/back.jpg';


const Card = ({imageUrl, playCard, hideCard}) => {

    const classes = useStyles();
    const imgUrl = hideCard ? backImage : imageUrl;

    return (
        <div onClick={playCard}>
            <img className={classes.card} src={imgUrl} alt=""/>
        </div>
    );
}

export default Card;