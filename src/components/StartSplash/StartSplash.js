import React, {useState} from 'react';
import useStyles from './styles';
import {Paper, TextField, Typography, Button} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {playerReady2Play, registerPlayer} from "../../store/actions/playerActions";
import DevHelper from "../DevHelper/DevHelper";

const StartSplash = ({letsPlay}) => {

    const [playerName, setPlayerName] = useState('');
    const {_id, name} = useSelector(state => state.player.player);

    const classes = useStyles();

    const dispatch = useDispatch();

    const submitPlayerHandler = (event) => {
        event.preventDefault();
        if (playerName.trim()) {
            dispatch(registerPlayer(playerName));
        }
    }

    const startGameHandler = () => {
        console.log('player ready to start');
        playerReady2Play(_id);
    }

    return (
        <div className={classes.splashWrapper}>
            <Paper className={classes.formWrapper}>
                <Typography variant="h4">{name}</Typography>
                <Typography variant="h6">Welcome to dixit!</Typography>
                <form autoComplete="off" noValidate onSubmit={submitPlayerHandler}>
                    <TextField name="name" variant="outlined" label="Type your name" fullWidth
                               value={playerName}
                               required
                               onChange={(event) => setPlayerName(event.target.value)}/>
                    <Button variant="contained" color="primary" size="medium" type="submit">SUBMIT</Button>
                </form>
            </Paper>
            {
                _id !== 'noID' &&
                <Paper className={classes.startWrapper}>
                    <Button variant="contained" color="secondary" size="large" onClick={startGameHandler}>START
                        DIXIT!</Button>
                    {!letsPlay &&
                    <Typography variant="body2">Waiting for all players to join</Typography>
                    }
                </Paper>
            }
            <DevHelper/>
        </div>
    );
}
export default StartSplash;