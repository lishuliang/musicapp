import {
    SET_PLAYLIST,
    SET_PLAYCURRENTINDEX,
    SET_LYRIC,
    SET_CURRENTTIME,
    SET_ISPAUSE,
    SET_CURRENTLYRICINDEX,
    SET_HISTORY,
} from './mutation-types';
import { getLyric } from '../api/index';

export const actions = {
    setPlaylist(context, payload) {
        context.commit(SET_PLAYLIST, payload.value);
    },
    setPlaycurrentindex(context, payload) {
        context.commit(SET_PLAYCURRENTINDEX, payload.index);
    },
    async setLyric(context, payload) {
        const result = await getLyric(payload.id);
        context.commit(SET_LYRIC, result.data.lrc.lyric);
    },
    setCurrenttime(context, payload) {
        context.commit(SET_CURRENTTIME, payload.time);
    },
    setIspause(context, payload) {
        context.commit(SET_ISPAUSE, payload.isPause);
    },
    setCurrentlyricindex(context, payload) {
        context.commit(SET_CURRENTLYRICINDEX, payload.index);
    },
    setHistory(context, payload) {
        context.commit(SET_HISTORY, payload.history);
    },
};
