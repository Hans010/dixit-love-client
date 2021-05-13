import React, {useEffect, useState} from 'react';
import {Typography} from "@material-ui/core";
import useStyles from './styles';
import {useSelector} from "react-redux";

const MessageBoard = (props) => {

    const storyTeller = useSelector(state => state.player.storyTellerName);
    const hasStory = useSelector(state => state.round.story);
    const hideCards = useSelector(state => state.cards.hideCards);

    const [message, setMessage] = useState(`${storyTeller.toUpperCase()} IS THE STORYTELLER`);

    useEffect(() => {
        setMessage(`${storyTeller.toUpperCase()} IS THE STORYTELLER`);
        if (hasStory.length > 0) {
            setMessage('SELECT A CARD TO MATCH THE STORY');
        } else {
            setMessage(`${storyTeller.toUpperCase()} IS THE STORYTELLER`);
        }
        if (!hideCards) {
            setMessage("VOTE ON THE STORYTELLER'S CARD");
        }
        console.log(message);
    }, [hasStory, hideCards, storyTeller])

    const classes = useStyles();

    return (

        <Typography className={classes.message} variant="h3"  >{message}</Typography>
    );
}
export default MessageBoard;