import {actionTypes} from "../constants/actionTypes";
import * as api from '../api';

export const submitStory = (story) => async (dispatch) => {

    const {data} = await api.submitStory(story);
    console.log(data);
    dispatch({type: actionTypes.SUBMIT_STORY, data})
}