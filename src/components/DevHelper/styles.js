import {makeStyles} from "@material-ui/core";

export default makeStyles(theme => ({
    helperContainer: {
        position: "relative",
        margin: '1rem',
        width: '15vw',
        height: '50vh',
        // zIndex: '1000'
        alignSelf: "start",
        backgroundColor: 'rgba(23,55,123,0.6)',
        textAlign: "center"
    },
    buttonRack: {
        position: "absolute",
        bottom: '1rem',
        left: '1rem',
        display: "flex",
        flexFlow: "column wrap",
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
        height: '100%'
    },
    button: {
        margin: '0.5rem 0',
        padding: '10px 20px',
        minWidth: '12rem'
    },
    title: {
        color: "white",
        zIndex: '100'
    }
}));