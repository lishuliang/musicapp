import { createStore } from 'vuex';
import { mutations } from './mutatons';
import { actions } from './actions';

const state = {
    playlist: [{ al: {} }],
    playCurrentIndex: 0,
};

const store = createStore({
    state,
    mutations,
    actions,
});

export default store;
