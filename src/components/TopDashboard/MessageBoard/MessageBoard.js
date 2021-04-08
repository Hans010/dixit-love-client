import React from 'react';
import useStyles from './styles';
import {useSelector} from "react-redux";

const MessageBoard = (props) => {

    const storyTeller = useSelector(state => state.player.storyTellerName);

    const classes = useStyles();

    return (
        <p>{`It's ${storyTeller}'s turn!`}</p>
    );
}
export default MessageBoard;