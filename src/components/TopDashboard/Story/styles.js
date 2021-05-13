import {makeStyles} from "@material-ui/core";

export default makeStyles(theme => ({
    storyFormWrapper: {
        width: '40vw',
        background: "transparent",
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
        lineHeight: 'normal',
        backgroundColor: "rgb(0,0,0)",
        borderColor: "rgb(187,180,180)",
    },

    storyWrapper: {
        // backgroundColor: "red"
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "flex-start",
        alignItems: 'center',
    }
    ,
    go: {
        marginTop: '15px',
        backgroundColor: "rgb(146,137,137)",
        color: "white",
    }
    ,

}))
;