import { SET_PLAYLIST } from './mutation-types';
import { SET_PLAYCURRENTINDEX } from './mutation-types';

export const actions = {
    setPlaylist(context, value) {
        context.commit(SET_PLAYLIST, value);
    },
    setPlaycurrentindex(context, value) {
        context.commit(SET_PLAYCURRENTINDEX, value);
    },
};
