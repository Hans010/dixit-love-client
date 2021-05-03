import {makeStyles} from "@material-ui/core";

export default makeStyles(theme => ({

    leaderBoardWrapper: {},
    leaderBoard: {
        display: "flex",
        flexFlow: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        listStyle: "none"
    },
    playerSlot: {
        padding: '10px'
    },
    playerRow: {
        display: "flex",
        flexFlow: 'row nowrap',
        justifyContent: "flex-start",
        alignItems: "center"
        },
    avatar: {
        maxWidth: '50px',
        borderRadius: '25%',
        marginRight: '10px'
    }



}));