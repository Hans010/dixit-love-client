import React from 'react';
import useStyles from './styles';
import Story from './Story/Story'
import LeaderBoard from "./LeaderBoard/LeaderBoard";
import MessageBoard from "./MessageBoard/MessageBoard";

const TopDashboard = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.topDashboard}>
            <MessageBoard/>
            <Story/>
        </div>
    );
}
export default TopDashboard;