import { createStore } from 'vuex';
import { mutations } from './mutatons';
import { actions } from './actions';

const state = {
    playlist: [
        {
            name: 'Darin',
            al: {
                id: 126046,

                picUrl: 'http://p3.music.126.net/TymAhk2vlsAW10T054d2Qw==/109951165994365993.jpg',
                tns: [],
                pic_str: '109951165994365993',
                pic: 109951165994366000,
            },
        },
    ],
    playCurrentIndex: 0,
    lyric: '',
    currentTime: 0,
    isPause: true,
    currentLyricIndex: 0,
};

const store = createStore({
    state,
    mutations,
    actions,
});

export default store;
