import React, {useState} from 'react';
import useStyles from './styles';
import {Paper, TextField, Typography, Button} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {submitStory} from "../../store/actions/storyActions";

const Story = (props) => {

    const story = useSelector(state => state.round.story);

    // TODO access local storage to get playerName and check if he's storyteller;
    const isStoryTeller = true;

    const [storyString, setStoryString] = useState('');
    const classes = useStyles();
    const dispatch = useDispatch();

    const submitStoryHandler = (event) => {
        event.preventDefault();
        if (storyString.trim()){
        dispatch(submitStory({story: storyString}));
        setStoryString('');
        }
    };

    return (
        <div className={classes.storyWrapper}>
            {isStoryTeller &&
            <Paper className={classes.storyFormWrapper}>
                <Typography variant="h6">Type your story</Typography>
                <form autoComplete="off" noValidate onSubmit={submitStoryHandler}>
                    <TextField name="story" variant="outlined" label="Type your story here" fullWidth
                               value={storyString}
                               required
                               onChange={(event) => setStoryString(event.target.value)}/>
                    <Button variant="contained" color="primary" size="medium" type="submit">SEND</Button>
                </form>
            </Paper>
            }
            <Typography variant="h2" className={classes.storyText}>{story}</Typography>
        </div>
    );
}
export default Story;