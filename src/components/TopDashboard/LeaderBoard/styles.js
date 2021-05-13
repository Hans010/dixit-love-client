import {makeStyles} from "@material-ui/core";

export default makeStyles(theme => ({

    leaderBoardWrapper: {},
    leaderBoard: {
        position: 'absolute',
        top: '5%',
        left: '0',
        display: "flex",
        flexFlow: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        listStyle: "none",
        maxWidth: '200px;',
        margin: '0',
        padding: '25px',
        backgroundColor: 'rgba(200,200,200, 0.3)',
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