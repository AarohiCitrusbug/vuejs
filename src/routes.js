import { createWebHashHistory,createRouter } from "vue-router";
import Login from './components/authentication/Login.vue';
import Registration from './components/authentication/Registration.vue';
import Dashboard from './components/Dashboard.vue';
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
    },
    {
        name:'Dashboard',
        path:'/',
        component:Dashboard
    }
]

const router=createRouter({
    history:createWebHashHistory(),
    routes
});

export default router;

router.beforeEach(async (to) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/login','/register'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');

    if (authRequired && !loggedIn) {
        return '/login';
    }
});