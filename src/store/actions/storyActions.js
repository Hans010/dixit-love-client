import {actionTypes} from "../constants/actionTypes";
import {socket} from "../../service/socket";


export const submitStory = (submittedStory) => (dispatch) => {

    socket.emit('story submitted', submittedStory);
    socket.on('new story', ({story}) => {
        dispatch({type: actionTypes.SUBMIT_STORY, story});
    })

}