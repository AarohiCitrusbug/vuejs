import { createWebHashHistory,createRouter } from "vue-router";
import Login from './components/authentication/Login.vue';
import Registration from './components/authentication/Registration.vue';
import Dashboard from './components/Dashboard.vue';
import Binding from './components/Binding.vue';
import Rendring from './components/Rendring.vue';
import Modifiers from './components/Modifiers.vue';
import ComputedProperties from './components/ComputedProperties.vue';
import Watchers from './components/Watchers.vue';
import Slots  from './components/Slots.vue';
import DynamicComponents from './components/DynamicComponents.vue';
import mixins from './components/mixins.vue';
import CompositionAPI from './components/CompositionAPI.vue';
import ListOfUsers from './components/ListOfUsers.vue';
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
    },
    {
        name:'Binding',
        path:'/binding',
        component:Binding
    },
    {
        name:'Rendring',
        path:'/rendring',
        component:Rendring
    }
    ,
    {
        name:'Modifiers',
        path:'/modifiers',
        component:Modifiers
    },
    {
        name:'ComputedProperties',
        path:'/computed',
        component:ComputedProperties
    },
    {
        name:'Watchers',
        path:'/watchers',
        component:Watchers
    },
    {
        name:'Slots',
        path:'/slots',
        component:Slots
    },
    {
        name:'DynamicComponents',
        path:'/dynamic/components',
        component:DynamicComponents
    },
    {
        name:'mixins',
        path:'/reuse/mixins',
        component:mixins
    },
    {
        name:'ListOfUsers',
        path:'/users',
        component:ListOfUsers
    },
    {
        name:'CompositionAPI',
        path:'/composition/api',
        component:CompositionAPI
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