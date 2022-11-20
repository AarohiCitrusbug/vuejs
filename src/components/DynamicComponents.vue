<template>
    <Header/>
    <div class="row">
        <div class="col-sm-3"> <Sidebar/></div>
        <div class="col-sm-9 mt-5">  
            <button @click="activeTab = 'TabA'">Tab A</button>
            <button @click="activeTab = 'TabB'">Tab b</button>
            <button @click="activeTab = 'TabC'">TAb c</button>
            <div class="mt-3">
                <keep-alive>
                    <component :is="activeTab" />
                </keep-alive>
            </div>
        </div>
    </div>
</template>
<script>
import Header from './Layouts/Header.vue';
import Sidebar from './Layouts/Sidebar.vue';
import TabA from './dynamicComponents/TabA.vue';
import TabB from './dynamicComponents/TabB.vue';
import TabC from './dynamicComponents/TabC.vue';
export default {
    name:"DynamicComponents",
    components:{
        Header,
        Sidebar,
        TabA,TabB, TabC
    },
    data(){
        return{
            activeTab : 'TabA'
        }
    }
}
</script>
