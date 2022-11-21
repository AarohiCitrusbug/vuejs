<template>
    <Header/>
    <div class="row">
        <div class="col-sm-3"> <Sidebar/></div>
        <div class="col-sm-9 mt-5">  
            <h1>Welcome {{name}}</h1>
        </div>
    </div>
   
   <!--  <button @click="activeTab = 'TabA'">Tab A</button>
    <button @click="activeTab = 'TabB'">Tab B</button>
    <button @click="activeTab = 'TabC'">Tab C</button>
    <KeepAlive>
        <component :is="activeTab" />
    </KeepAlive> -->
</template>
<script>
import TabA from './dynamicComponents/TabA.vue';
import TabB from './dynamicComponents/TabB.vue';
import TabC from './dynamicComponents/TabC.vue';
import Header from './Layouts/Header.vue';
import Sidebar from './Layouts/Sidebar.vue';
export default {
    name:"Dashboard",
    components:{
        Header,
        Sidebar,
        TabA,
        TabB,
        TabC
    },
    data(){
        return{
            activeTab:'TabA',
            name: ""
        }
    },
    beforeMount(){
        let userName = localStorage.getItem('firstName');
        this.name =  userName.replace(/['"]+/g,' ');
    }
}
</script>
