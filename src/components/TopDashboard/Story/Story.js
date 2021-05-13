import React, {useState, Fragment} from 'react';
import useStyles from './styles';
import {Paper, TextField, Typography, Button} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {submitStory} from "../../../store/actions/storyActions";

const Story = (props) => {

    const story = useSelector(state => state.round.story);
    const storyTeller = useSelector(state => state.player.storyTellerName);
    const isStoryTeller = useSelector(state => state.player.storyTeller);

    // TODO access local storage to get playerName and check if he's storyteller;

    const [storyString, setStoryString] = useState('');
    const classes = useStyles();
    const dispatch = useDispatch();

    const submitStoryHandler = (event) => {
        event.preventDefault();
        if (storyString.trim()) {
            dispatch(submitStory({story: storyString}));
            setStoryString('');
        }
    };

    return (
        <div className={classes.storyWrapper}>
            {(isStoryTeller && !story) &&
            <Paper className={classes.storyFormWrapper}>
                <Typography variant="h6" className={classes.textTip}>Type your story</Typography>
                <form autoComplete="off" noValidate onSubmit={submitStoryHandler}>
                    <TextField className={classes.inputField} name="story" variant="outlined" fullWidth
                               autoFocus
                               multiline="true"
                               inputProps={{className: `${classes.textTip} ${classes.inputField}`}}
                               value={storyString}
                               required
                               onChange={(event) => setStoryString(event.target.value)}/>
                    <Button className={classes.go} variant="contained" size="medium" type="submit">GO!</Button>
                </form>
            </Paper>}
            {story &&
            <Fragment>
                <Typography variant="h6" className={classes.textTip}>{storyTeller}'s story</Typography>
                <Typography variant="h2" className={classes.textTip}>{story}</Typography>
            </Fragment>
            }
        </div>
    );
}
export default Story;