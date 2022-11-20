<template>
    <div>
        <b>Tab C Content</b>
    </div>
    <input type="text" v-model="name" class="form-control item mt-2" placeholder="Enter any text"/>
 </template>
 <script>
 export default {
     name:"TabC",
     data(){
        return {
            name:''
        }
     }
 }
 </script>