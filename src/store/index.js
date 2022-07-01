import { createStore } from 'vuex';
import { mutations } from './mutatons';
import { actions } from './actions';

const state = {
    playlist: [
        {
            al: {
                id: 19003,
                name: '大热',
                pic: 109951165085876140,
                picUrl: 'http://p4.music.126.net/ylf_QMnt4u0v_F518pn8Ng==/109951165085876142.jpg',
                pic_str: '109951165085876142',
            },
        },
    ],
    playCurrentIndex: 0,
};

const store = createStore({
    state,
    mutations,
    actions,
});

export default store;
