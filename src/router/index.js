import {
    createRouter,
    createWebHistory,
    createWebHashHistory,
} from 'vue-router';
import Home from '../view/Home.vue';
import Listview from '../view/listView.vue';
import Search from '../view/Search.vue';
import Me from '../view/Me.vue';
import Login from '../view/Login.vue';
import store from '../store/index';

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
    {
        path: '/me',
        component: Me,
        beforeEnter: (to, from, next) => {
            if (store.state.user.isLongin) {
                next();
            } else {
                next('/login');
            }
        },
    },
    {
        path: '/login',
        component: Login,
    },
];

const router = createRouter({
    // history: createWebHistory(),
    history: createWebHashHistory(),
    routes,
});

export default router;
