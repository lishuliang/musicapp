import {SET_PLAYLIST} from './mutation-types';
import {SET_PLAYCURRENTINDEX} from './mutation-types';

export const mutations = {
    SET_PLAYLIST(state, value) {
        state.playlist = value;
    },
    SET_PLAYCURRENTINDEX(state, value) {
        state.playCurrentIndex = value;
    }
}