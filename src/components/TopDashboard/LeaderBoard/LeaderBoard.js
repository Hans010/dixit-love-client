import React from 'react';
import useStyles from './styles';
import {useSelector} from "react-redux";

const LeaderBoard = (props) => {

    const players = useSelector(state => state.player.players);

    const classes = useStyles();

    return (
        <ul className={classes.leaderBoard}>
            {players.sort((a, b) => b.score - a.score)
                .map((player, index) => {
                const avatarUrl = `https://robohash.org/${player.name}?set=set4`;
                return (
                <li className={classes.playerSlot} key={index}>
                    <div className={classes.playerRow}>
                        <img className={classes.avatar} src={avatarUrl} alt=""/>
                        <p>{player.name} - {player.score}</p>
                    </div>
                </li>)}
            )}
        </ul>
    );
}
export default LeaderBoard;