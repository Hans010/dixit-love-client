import React from 'react';
import useStyles from './styles';
import Story from './Story/Story'
import LeaderBoard from "./LeaderBoard/LeaderBoard";
import MessageBoard from "./MessageBoard/MessageBoard";

const TopDashboard = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.topDashboard}>
            <LeaderBoard/>
            <Story />
            <MessageBoard/>
        </div>
    );
}
export default TopDashboard;