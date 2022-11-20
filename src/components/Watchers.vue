<template>
    <Header/>
    <div class="row">
        <div class="col-sm-3"> <Sidebar/></div>
        <div class="col-sm-9 mt-5">  
            <h3>Volume Tracker</h3>
            <h5>Current Volume - {{volume}}</h5>
            <div>
                <button @click="volume += 2" v-bind:style="'margin-right:10px'">Increase</button>
                <button @click="volume -= 2">Decrease</button>
            </div>
            <h3 class="mt-4">Immediate Watcher</h3>
            <input type="text" v-model="name" />
            <p>Name - {{watchersName}}</p>
        </div>
    </div>
</template>
<script>
import Header from './Layouts/Header.vue';
import Sidebar from './Layouts/Sidebar.vue';
export default {
    name:"Watchers",
    components:{
        Header,
        Sidebar
    },
    data(){
        return{
            volume : 1,
            name : 'Aarohi',
            watchersName:''
        }
    },
    watch:{
        volume(newValue, oldValue){
            if(newValue > oldValue && newValue === 17){
                alert('Listening to high volume may damage your hearing')
            }
        },
        name:{
            handler(newValue){
                this.watchersName = newValue
            },
            immediate:true
        }
    }
}
</script>
