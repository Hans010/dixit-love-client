import React from 'react';
import useStyles from './styles';
import Story from './Story/Story'
import LeaderBoard from "./LeaderBoard/LeaderBoard";

const TopDashboard = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.topDashboard}>
            <LeaderBoard/>
            <Story />

        </div>
    );
}
export default TopDashboard;