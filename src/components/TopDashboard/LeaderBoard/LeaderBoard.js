import React from 'react';
import useStyles from './styles';
import {useSelector} from "react-redux";

const LeaderBoard = (props) => {

    const players = useSelector(state => state.player.players);

    const classes = useStyles();

    return (
        <ul className={classes.leaderBoard}>
            {players.map((player, index) =>
                <li className={classes.playerSlot} key={index}>{player.name} - {player.score}</li>
            )}
        </ul>
    );
}
export default LeaderBoard;