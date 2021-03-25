import Hand from "./components/Hand/Hand";
import Table from "./components/Table/Table";
import {useEffect, useState} from "react";
import useStyles from './styles';
import axios from "axios";

function App() {

    const classes = useStyles();

    // useEffect(() => {
    //     getCards();
    // }, []);

    return (
        <div className={classes.dixit}>
            <h1 style={{margin:'0', color:"white", padding:'3rem'}}>Dixit client starts here ;) </h1>
            <Table />
            <Hand />
        </div>
    )
        ;
}

export default App;
