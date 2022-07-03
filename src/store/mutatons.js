import {
    SET_PLAYLIST,
    SET_PLAYCURRENTINDEX,
    SET_LYRIC,
    SET_CURRENTTIME,
    SET_ISPAUSE,
    SET_CURRENTLYRICINDEX,
    SET_HISTORY,
} from './mutation-types';

export const mutations = {
    SET_PLAYLIST(state, value) {
        state.playControllor.playlist = value;
    },
    SET_PLAYCURRENTINDEX(state, value) {
        state.playControllor.playCurrentIndex = value;
    },
    SET_LYRIC(state, value) {
        state.playControllor.lyric = value;
    },
    SET_CURRENTTIME(state, value) {
        state.playControllor.currentTime = value;
    },
    SET_ISPAUSE(state, value) {
        state.playControllor.isPause = value;
    },
    SET_CURRENTLYRICINDEX(state, value) {
        state.playControllor.currentLyricIndex = value;
    },
    SET_HISTORY(state, value) {
        state.history = value;
    },
};
