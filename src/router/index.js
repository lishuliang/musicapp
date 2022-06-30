import { createRouter, createWebHistory } from 'vue-router';
import Home from '../view/Home.vue';
import Listview from '../view/listView.vue';

const routes = [
    { path: '/', component: Home },
    {
        path: '/listview',
        component: Listview,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
