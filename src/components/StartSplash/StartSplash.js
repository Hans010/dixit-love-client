import React, {useState} from 'react';
import useStyles from './styles';
import {Paper, TextField, Typography, Button} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {registerPlayer} from "../../store/actions/playerActions";

const StartSplash = () => {

    const [playerName, setPlayerName] = useState('');
    const classes = useStyles();

    const dispatch = useDispatch();

    const submitPlayerHandler = (event) => {
        event.preventDefault();
        if (playerName.trim()) {
            dispatch(registerPlayer(playerName));
            localStorage.setItem('playerName', playerName);
        }
    }

    return (
        <div className={classes.splashWrapper}>
            <Paper className={classes.formWrapper}>
                <Typography variant="h6">Welcome to dixit!</Typography>
                <form autoComplete="off" noValidate onSubmit={submitPlayerHandler}>
                    <TextField name="name" variant="outlined" label="Type your name" fullWidth
                               value={playerName}
                               required
                               onChange={(event) => setPlayerName(event.target.value)}/>
                    <Button variant="contained" color="primary" size="medium" type="submit">START GAME</Button>
                </form>
            </Paper>
        </div>
    );
}
export default StartSplash;