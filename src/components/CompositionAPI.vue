<template>
    <Header/>
    <div class="row">
        <div class="col-sm-3"> <Sidebar/></div>
        <div class="col-sm-9 mt-5"> 
            <h2>Options - {{name}}</h2>
            <h2>Composition - {{greet}}</h2>
            <h2>{{reactiveGreet}}</h2>
            <h2>{{language}}</h2>
            <CompositionClickCounter/>
            <CompositionHoverCounter/>
        </div>
    </div>
</template>
<script>
import {reactive, ref} from 'vue';
import Header from './Layouts/Header.vue';
import Sidebar from './Layouts/Sidebar.vue';
import CompositionClickCounter from './CompositionClickCounter.vue';
import CompositionHoverCounter from './CompositionHoverCounter.vue';
export default {
    name:"CompositionAPI",
    components:{
        Header,
        Sidebar,
        CompositionClickCounter,
        CompositionHoverCounter
    },
    setup(){
        let language = ref('PHP')
        const c_name = ref('Test Demo')
        c_name.value = 'User'
        const greet = `Hello ${c_name.value}`
        const state = reactive({
            var1: 'User1',
            var2: 'User2',
            var3: 'User3'
        })
        
        const reactiveGreet = `Hello ${state.var1} ${state.var2} and ${state.var3}`
        
        setTimeout(()=>{
            language.value = 'JAVA'
        },2000)
        return{
            c_name,
            greet,
            reactiveGreet,
            language
        }
        
    },
    data(){
        return{
         name:'Aarohi Shah'
        }
    }
}
</script>
