<template>
    <Header/>
    <div class="row">
        <div class="col-sm-3"> <Sidebar/></div>
        <div class="col-sm-9 mt-5">  
            <div>
                <h3>Conditional Rendring</h3>
                <input type="text" class="form-control item mt-2" id="text" placeholder="Enter number or text" v-model="text" @input="check($event)">
                <div v-if="text !=''" class="mt-2">
                    <p v-if="text == 0 "> The number is zero</p>
                    <p v-else-if="text > 0"> The number is positive</p>
                    <p v-else-if="text < 0"> The number is negative</p>
                    <p v-else> Not a number</p>
                </div>
            </div>
            <hr/>
            <div class="mt-3">
                <h3>List Rendring</h3>
                <input type="text" class="form-control item mt-2" id="names" placeholder="Enter any text" v-model="name"  @input="addName($event)">
                <button @click="addTOarray" class="mt-3">Add To List</button>
                <ul class="mt-2">
                    <li
                        v-for="(name, i) in listOfName"
                        :key="i"
                    >
                        {{ name }}
                    </li>
                </ul>
                <input type="text" class="form-control item mt-2" id="names" placeholder="Enter First Name" v-model="firstName"  @input="addFirstName($event)">
                <input type="text" class="form-control item mt-2" id="names" placeholder="Enter Last Name" v-model="lastName"  @input="addLastName($event)">
                <button v-on:click="addTOarrayOfObject" class="mt-3">Add To List</button>
                <ul class="mt-2">
                    <li
                        v-for="(fullName, i) in listOfFullName"
                        :key="i"
                    >
                        {{ fullName.first_name }} {{ fullName.last_name }}
                    </li>
                </ul>
            </div>
            <hr/>
            <div class="mt-3">
                <ul class="mt-2">
                    <li
                        v-for="(language, i) in listOfObjectArray"
                        :key="i"
                    >
                        <h4>{{ language.language }}</h4>
                        <ul>
                            <li
                            v-for="(empName, i) in language.employeeName"
                            :key="i"
                            >
                                <p>{{empName}}</p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import Header from './Layouts/Header.vue';
import Sidebar from './Layouts/Sidebar.vue';
export default {
    name:"Rendring",
    components:{
        Header,
        Sidebar
    },
    data(){
        return{
            text:"",
            listOfName:['Test'],
            listOfFullName:[
                {first_name:'Aarohi', last_name:'Shah'}
            ],
            listOfObjectArray:[
                {
                    language:'PHP',
                    employeeName: ['A','B','C']
                },
                {
                    language:'JAVA',
                    employeeName: ['X','Y','Z']
                },
                {
                    language:'Paython',
                    employeeName: ['Test','Test 1','Test 2']
                }
            ],
            name:"",
            firstName:"",
            lastName:"",
        }
    },
    methods:{
        check(event){
            this.text=event.target.value;
        },
        addTOarray(){
            if(this.name != ''){
                this.listOfName.push(this.name);
                this.name = "";
            }
        },
        addTOarrayOfObject(){
            if(this.firstName != '' && this.lastName != ''){
                this.listOfFullName.push({first_name:this.firstName , last_name : this.lastName});
                this.firstName = "";
                this.lastName = "";
            }
        },
        addName(event){
            this.name=event.target.value;
        },
        addFirstName(event){
            this.firstName=event.target.value;
        },
        addLastName(event){
            this.lastName=event.target.value;
        },
    }
}
</script>
