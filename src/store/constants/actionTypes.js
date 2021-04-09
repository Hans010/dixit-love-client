export const actionTypes = {

    // client startup

    START_CLIENT: 'START_CLIENT',
    START_GAME: 'START_GAME',
    LETS_PLAY: 'LETS_PLAY',


    //players

    REGISTER_PLAYER: 'REGISTER_PLAYER',
    PLAYER_UPDATE: 'PLAYER_UPDATE',
    UPDATE_PLAYERS: 'UPDATE_PLAYERS',
    IS_STORY_TELLER: 'IS_STORY_TELLER',

    //round related

    VOTE_RESULTS: 'VOTE_RESULTS',
    NEW_ROUND: 'NEW_ROUND',
    NEW_STORYTELLER: 'NEW_STORYTELLER',
    SUBMIT_STORY: 'SUBMIT_STORY',
    CLEAR_STORY: 'CLEAR_STORY',

    //cards

    GET_NEW_CARDS: 'GET_NEW_CARDS',
    PLAY_CARD: 'PLAY_CARD',
    UPDATE_PLAY: 'UPDATE_PLAY',
    REVEAL_PLAY: 'REVEAL_PLAY',
};