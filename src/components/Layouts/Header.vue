<template>
    <div class="topnav">
        <div>
            <a @click="logOut" >Log Out</a>
        </div>
    </div>
</template>
<script>
export default {
    name:"Header",
    data(){
    },
    methods:{
        logOut:function(){
            localStorage.removeItem('user');
            localStorage.removeItem('firstName');
            this.$router.push({name:'Login'})
        }
    }
}
</script>
