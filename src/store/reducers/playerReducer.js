import {actionTypes} from "../constants/actionTypes";

const playerReducer = (state = {}, action) => {

    switch (action.type) {
        case actionTypes.REGISTER_PLAYER:
            return {...state, ...action.player};

        default:
            return state;
    }

}

export default playerReducer;