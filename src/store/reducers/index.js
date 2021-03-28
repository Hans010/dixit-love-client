import {combineReducers} from "redux";
import cards from './cardsReducer';
import round from './roundReducer';
import player from './playerReducer';
import game from './gameReducer';

export default combineReducers({cards, game, player, round});