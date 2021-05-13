import {makeStyles} from "@material-ui/core";

export default makeStyles(theme => ({
    storyFormWrapper: {
        width: '40vw',
        // background: "dimgray",
        margin: '0 2rem',
        textAlign: "center",
    },
    textTip: {
        color: "rgb(187,180,180)",
        fontFamily: "'Oregano', cursive",
        marginBottom: '10px',
        textTransform: "uppercase"
    },
    inputField: {
        fontSize: '2rem',
        lineHeight: 'normal'
    },
    storyWrapper: {
        backgroundColor: "red"
    },
    go: {
        backgroundColor: "rgb(146,137,137)",
        color: "white",
    },

}));