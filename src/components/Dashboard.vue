<template>
    <h1>
       Welcome
    </h1>
    <button @click="activeTab = 'TabA'">Tab A</button>
    <button @click="activeTab = 'TabB'">Tab B</button>
    <button @click="activeTab = 'TabC'">Tab C</button>
    <KeepAlive>
        <component :is="activeTab" />
    </KeepAlive>
    
</template>
<script>
import TabA from './dynamicComponents/TabA.vue';
import TabB from './dynamicComponents/TabB.vue';
import TabC from './dynamicComponents/TabC.vue';
export default {
    name:"Dashboard",
    components:{
        TabA,
        TabB,
        TabC
    },
    data(){
        return{
            activeTab:'TabA'
        }
    }
}
</script>
