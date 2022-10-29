import { createWebHashHistory,createRouter } from "vue-router";
import Login from './components/authentication/Login.vue';
import Registration from './components/authentication/Registration.vue';

const routes=[
    {
        name:'Login',
        path:'/login',
        component:Login
    },
    {
        name:'Registration',
        path:'/register',
        component:Registration
    }
]

const router=createRouter({
    history:createWebHashHistory(),
    routes
});

export default router;