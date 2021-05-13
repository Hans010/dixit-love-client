import React, {Fragment} from 'react';
import useStyles from './styles';
import TopDashboard from "../TopDashboard/TopDashboard";
import Table from "../Table/Table";
import Hand from "../Hand/Hand";
import DevHelper from "../DevHelper/DevHelper";
import MessageBoard from "../TopDashboard/MessageBoard/MessageBoard";
import Story from "../TopDashboard/Story/Story";
import {useSelector} from "react-redux";
import LeaderBoard from "../TopDashboard/LeaderBoard/LeaderBoard";

const Game = () => {
    const classes = useStyles();

    return (
        <Fragment>
            <div className={classes.gameWrapper}>
                <TopDashboard/>
                <LeaderBoard/>
                <Table/>
                <Hand/>
                <DevHelper/>
            </div>
        </Fragment>
    );
}
export default Game;