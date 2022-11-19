<template>
    <Header/>
    <div class="row">
        <div class="col-sm-3"> <Sidebar/></div>
        <div class="col-sm-9 mt-5">  
            <p v-text="vText"></p>
            <span v-html="vHtml"></span>
        </div>
    </div>
</template>
<script>
import Header from './Layouts/Header.vue';
import Sidebar from './Layouts/Sidebar.vue';
export default {
    name:"Binding",
    components:{
        Header,
        Sidebar
    },
    data(){
        return{
         vText:"Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.",
         vHtml:"<a href='https://vuejs.org/guide/introduction.html' target='_blank'>Vue.js</a>"
        }
    }
}
</script>
