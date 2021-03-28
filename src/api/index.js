import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();

const API = axios.create({baseURL: process.env.REACT_APP_API_URL});

export const dealCards = (cardsNeeded) => API.get(`/card/${cardsNeeded}`);
export const submitStory = (story) => API.post('/game/story', story);
export const startGame = () => API.post('/game/start');
export const createPlayer = (playerName) => API.post('/player/addPlayer', playerName);

