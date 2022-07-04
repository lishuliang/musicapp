import { createStore } from 'vuex';
import { mutations } from './mutatons';
import { actions } from './actions';

const state = {
    playControllor: {
        playlist: [
            {
                name: '如果世界有了你',
                al: {
                    id: 3177287,
                    name: '卫斯理 电视原声带',
                    pic: 7959364674532624,
                    picUrl: 'http://p3.music.126.net/v09U5DHpj-VcqZAwiu3FMQ==/7959364674532624.jpg',
                },
                id: 33083033,
            },
        ],
        playCurrentIndex: 0,
        lyric: '',
        currentTime: 0,
        isPause: true,
        currentLyricIndex: 0,
    },
    history: ['陈奕迅', '周杰伦', '伍佰'],
    user: {
        isLongin: false,
        name: 'lsl',
    },
};

const store = createStore({
    state,
    mutations,
    actions,
});

export default store;
