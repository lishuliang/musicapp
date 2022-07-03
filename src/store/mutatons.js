import {
    SET_PLAYLIST,
    SET_PLAYCURRENTINDEX,
    SET_LYRIC,
    SET_CURRENTTIME,
    SET_ISPAUSE,SET_CURRENTLYRICINDEX
} from './mutation-types';

export const mutations = {
    SET_PLAYLIST(state, value) {
        state.playlist = value;
    },
    SET_PLAYCURRENTINDEX(state, value) {
        state.playCurrentIndex = value;
    },
    SET_LYRIC(state, value) {
        state.lyric = value;
    },
    SET_CURRENTTIME(state, value) {
        state.currentTime = value;
    },
    SET_ISPAUSE(state, value) {
        state.isPause = value;
    },
    SET_CURRENTLYRICINDEX(state, value) {
        state.currentLyricIndex = value;
    }
};
