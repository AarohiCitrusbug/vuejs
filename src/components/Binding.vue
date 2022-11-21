<template>
    <Header/>
    <div class="row">
        <div class="col-sm-3"> <Sidebar/></div>
        <div class="col-sm-9 mt-5">  
            <h2 :id="titleId" class="title">What is vue?</h2>
            <p v-text="vText"></p>
            <span v-html="vHtml"></span>
            <p>SFC is a defining feature of Vue and is the recommended way to author Vue components if your use case warrants a build setup. You can learn more about the <span v-bind:class="highlight">how and why of SFC</span> in its dedicated section - but for now, just know that Vue will handle all the build tools setup for you.</p>
            <p v-bind:class=" dynamicBindTrue && 'highlight'" v-text="dummyText"></p>
            <p v-bind:class=" dynamicBindFalse && 'highlight'" v-text="dummyText"></p>
            <p v-bind:class=" !dynamicBindTrue ? 'highlight' : 'text'" v-text="dummyText"></p>
            <p v-bind:class="['title','text']" v-text="dummyText"></p>
            <p v-bind:class="{highlight : dynamicBindTrue}" v-text="dummyText"></p>
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
         vHtml:"<a href='https://vuejs.org/guide/introduction.html' target='_blank'>Vue.js</a>",
         titleId:'title',
         highlight:'highlight',
         text:'text',
         dynamicBindTrue:true,
         dynamicBindFalse:false,
         dummyText:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        }
    }
}
</script>
