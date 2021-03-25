import React from 'react';
import useStyles from './styles';
import {useSelector} from "react-redux";
import {Typography} from "@material-ui/core";

const Story = (props) => {

    const story = useSelector(state => state.game.story);

    const classes = useStyles();

    return (
        <Typography variant="h2" className={classes.storyText} >{story}</Typography>
    );
}
export default Story;