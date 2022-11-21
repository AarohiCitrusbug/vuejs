<template>
    <Header/>
    <div class="row">
        <div class="col-sm-3"> <Sidebar/></div>
        <div class="col-sm-9 mt-5">  
            <h1>Users</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key=user.id>
                        <td>{{user.first_name}}</td>
                        <td>{{user.last_name}}</td>
                        <td>{{user.email}}</td>
                    </tr>
                </tbody>
            </table>
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
import axios from 'axios';
import Header from './Layouts/Header.vue';
import Sidebar from './Layouts/Sidebar.vue';
//import axios from 'axios';
export default {
    name:"ListOfUsers",
    components:{
        Header,
        Sidebar
    },
    data(){
        return{
            users:[]
        }
    },
  async mounted(){
        let result = await axios.get("http://localhost:3000/user")
        console.log("result.data",result.data);
        this.users = result.data;
    }
}
</script>
