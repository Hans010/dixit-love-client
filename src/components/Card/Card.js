import React from 'react';
import useStyles from './styles';


const Card = ({imageUrl}) => {

    const classes = useStyles();

    return (
        <div>
            <img className={classes.card} src={imageUrl} alt=""/>
        </div>
    );
}

export default Card;