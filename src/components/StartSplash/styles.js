import {makeStyles} from "@material-ui/core";

export default makeStyles(theme => ({

    splashWrapper: {
        backgroundColor: "rgba(182,138,44,0.3)",
        minWidth: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "center"
    },

    formWrapper: {
        backgroundColor: "darkgreen",
        padding: "30px",
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "center"
    },

    startWrapper: {
        backgroundColor: "rgba(68,68,68,0.8)",
        padding: "30px",
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "center"
    }
}));