import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    hand: {
        padding: '5rem',
        display: "flex",
        flexFlow: 'row wrap',
        justifyContent: 'space-between',
        maxWidth: '60%'
    },
    handWrapper: {
        // position: "absolute",
        // bottom: '5%',
        display: "flex",
        justifyContent: "center",
        width: "100%"
    }
}));