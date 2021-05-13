import {makeStyles} from "@material-ui/core";
import Background from './assets/wood2.jpg';

export default makeStyles(theme => ({

    dixit: {
        backgroundImage: `url(${Background})`,
        width: '100vw',
        height: '100vh',
        position: "relative",
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "flex-start",
    },

    devBlock: {
        position: "absolute",
        bottom: '0',
        left: '20px'
    }
}))