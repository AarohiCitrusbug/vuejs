<template>
    <Header/>
    <div class="row">
        <div class="col-sm-3"> <Sidebar/></div>
        <div class="col-sm-9 mt-5">  
            <input type="text" class="form-control item mt-2" id="name" placeholder="Enter item name" v-model="name"  >
                <input type="number" class="form-control item mt-2" id="price" placeholder="Enter price" v-model="price">
                <button v-on:click="addToItems" class="mt-3">Add to Items</button>
                <ul class="mt-4">
                    <li v-for="(item, i) in items" :key="i">
                        <p>{{item.name}} - {{item.price}}</p>
                    </li>
                </ul>
                <h5 class="mt-4"> 
                    <b>Total Price - {{total}}</b>
                </h5>
                <hr/>
                <h5 class="mt-4"> Expensive Items </h5>
                <ul class="mt-4">
                    <li v-for="(item, i) in expensiveItems" :key="i">
                        <p>{{item.name}} - {{item.price}}</p>
                    </li>
                </ul>
        </div>
    </div>
</template>
<script>
import Header from './Layouts/Header.vue';
import Sidebar from './Layouts/Sidebar.vue';
export default {
    name:"ComputedProperties",
    components:{
        Header,
        Sidebar
    },
    data(){
        return{
            items:[
                {name:'TV', price:35000},
                {name:'Phone', price:10000},
                {name: 'Watch', price:500}
            ]
        }
    },
    methods:{
        addToItems(){
            if(this.name != '' && this.price != ''){
                this.items.push({name:this.name , price : this.price});
                this.name = "";
                this.price = "";
            }
        }
    },
    computed:{
        total(){
            return this.items.reduce((total,curr)=>(total + curr.price),0);
        },
        expensiveItems(){
            return this.items.filter(item => item.price >1000);
        }
    }
}
</script>
