<template>
    <Header/>
    <div class="row">
        <div class="col-sm-3"> <Sidebar/></div>
        <div class="col-sm-9 mt-5">  
            <div>
                <pre>
                    {{JSON.stringify(formValues,null,2)}}
                </pre>
            </div>
            <form @submit.prevent="onsubmit">
                <input type="text" class="form-control item mt-2" id="names" placeholder="Enter First Name" v-model.trim="formValues.firstName" >
                <input type="text" class="form-control item mt-2" id="names" placeholder="Enter Last Name" v-model.trim.lazy="formValues.lastName" >
                <input @keyup.enter="onsubmit" type="number" class="form-control item mt-2" id="age" placeholder="Enter Ege" v-model.number="formValues.age" >
            </form>
            <h2 class="mt-3">Bonus Directives</h2>
            <h4 v-once>{{name}}</h4>
            <h4>{{name}}</h4>
            <h4 v-pre>{{name}}</h4>
            <button @click="name='Testing'">Change Name</button>
        </div>
    </div>
</template>
<script>
import Header from './Layouts/Header.vue';
import Sidebar from './Layouts/Sidebar.vue';
export default {
    name:"Modifiers",
    components:{
        Header,
        Sidebar
    },
    data(){
        return{
           formValues:{
            firstName:'',
            lastName: '',
            age:null
           },
           name:"Test"
        }
    },
    methods:{
        onsubmit(event){
           alert("Success");
        }
    }
}
</script>
