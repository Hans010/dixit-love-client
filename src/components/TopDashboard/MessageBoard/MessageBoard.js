import React from 'react';
import useStyles from './styles';
import {useSelector} from "react-redux";

const MessageBoard = (props) => {

    const storyTeller = useSelector(state => state.player.storyTellerName);

    const classes = useStyles();

    return (
        <p className={classes.message}>{`${storyTeller} is the storyTeller!`}</p>
    );
}
export default MessageBoard;