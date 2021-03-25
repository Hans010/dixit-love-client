import {combineReducers} from "redux";
import cards from './cardsReducer';
import game from './gameReducer';

export default combineReducers({cards, game});