<template>
    <Header/>
    <div class="row">
        <div class="col-sm-3"> <Sidebar/></div>
        <div class="col-sm-9 mt-5">  
          <ClickCounter/>
          <HoverCounter/>
        </div>
    </div>
</template>
<script>
import Header from './Layouts/Header.vue';
import Sidebar from './Layouts/Sidebar.vue';
import ClickCounter from './ClickCounter.vue';
import HoverCounter from './HoverCounter.vue';
export default {
    name:"mixins",
    components:{
        Header,
        Sidebar,
        ClickCounter,
        HoverCounter
    },
    data(){
        return{
         
        }
    }
}
</script>
