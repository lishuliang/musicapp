import axios from 'axios';

//获取轮播图信息
export function getBanners(type = 1) {
    return axios.get(`http://localhost:4000/banner?type=${type}`);
}

//获取推荐歌单列表
export function getRecommendPlaylist(limit = 10) {
    return axios.get(`http://localhost:4000/personalized?limit=${limit}`);
}

//获取歌单详情
export function getPlaylistDetail(id) {
    return axios.get(`http://localhost:4000/playlist/detail?id=${id}`);
}
