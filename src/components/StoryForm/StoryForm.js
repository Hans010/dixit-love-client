import React, {useEffect, useState} from 'react';
import useStyles from './styles';
import {Paper, TextField, Typography, Button} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {submitStory} from "../../actions/storyActions";

const StoryForm = (props) => {

    const [story, setStory] = useState('');
    const classes = useStyles();
    const dispatch = useDispatch();

    const submitStoryHandler = (event) => {
        event.preventDefault();
        dispatch(submitStory({story: story}));
    };

    return (
        <Paper className={classes.storyWrapper}>
            <Typography variant="h6">Type your story</Typography>
            <form autoComplete="off" noValidate onSubmit={submitStoryHandler}>
                <TextField name="story" variant="outlined" label="Type your story here" fullWidth value={story} required
                           onChange={(event) => setStory(event.target.value)}/>
                <Button variant="contained" color="primary" size="medium" type="submit">SEND</Button>
            </form>
        </Paper>
    );
}
export default StoryForm;