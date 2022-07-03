import { createRouter, createWebHistory } from 'vue-router';
import Home from '../view/Home.vue';
import Listview from '../view/listView.vue';
import Search from '../view/Search.vue';

const routes = [
    { path: '/', component: Home },
    {
        path: '/listview',
        component: Listview,
    },
    {
        path: '/search',
        component: Search,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
