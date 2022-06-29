import axios from 'axios';

export function getBanners(type = 1) {
    return axios.get(`http://localhost:4000/banner?type=${type}`);
}
