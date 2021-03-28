import {makeStyles} from "@material-ui/core";

export default makeStyles(theme => ({

    splashWrapper: {
        backgroundColor: "rgba:(58, 219, 144, 0.3)",
        minWidth: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "center"
    },

    formWrapper: {
        backgroundColor: "darkgreen",
        padding: "30px"
    }
}));