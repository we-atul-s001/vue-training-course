import {createRouter, createWebHistory} from "vue-router";

import HomaPage from "../views/HomaPage.vue";
import UserPage from "../views/UserPage.vue";

const route = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomaPage
        },
        {
            path: '/user',
            component: UserPage
        }
    ]
});

export default route;