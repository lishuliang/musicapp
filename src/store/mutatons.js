import {SET_PLAYLIST} from './mutation-types';

export const mutations = {
    SET_PLAYLIST(state, value) {
        state.playlist = value;
    }
}