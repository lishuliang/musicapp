import axios from 'axios';

const BASE_URL = "http://localhost:4000";

//获取轮播图信息
export function getBanners(type = 1) {
    return axios.get(`${BASE_URL}/banner?type=${type}`);
}

//获取推荐歌单信息
export function getRecommendPlaylist(limit = 10) {
    return axios.get(`${BASE_URL}/personalized?limit=${limit}`);
}

//获取歌单详情
export function getPlaylistDetail(id) {
    return axios.get(`${BASE_URL}/playlist/detail?id=${id}`);
}

//获取歌词
export function getLyric(id) {
    return axios.get(`${BASE_URL}/lyric?id=${id}`);
}
