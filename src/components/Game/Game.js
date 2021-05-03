import React, {Fragment, useEffect} from 'react';
import useStyles from './styles';
import TopDashboard from "../TopDashboard/TopDashboard";
import Table from "../Table/Table";
import Hand from "../Hand/Hand";
import DevHelper from "../DevHelper/DevHelper";
import MessageBoard from "../TopDashboard/MessageBoard/MessageBoard";

const Game = ({player}) => {
    const classes = useStyles();

    return (
        <Fragment>
            <h1 style={{margin: '0', color: "white", padding: '3rem'}}>{`Dixit client starts here ${player.name} ;) `}</h1>
            <TopDashboard/>
            <Table/>
            <Hand/>
            <DevHelper/>
            <MessageBoard/>
        </Fragment>
    );
}
export default Game;