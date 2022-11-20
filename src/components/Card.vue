<template>
   <div class="card">
        <div id="card-header">
            <slot name="header"></slot>
        </div>
        <div id="card-content">
            <slot></slot>
        </div>
        <div id="card-footer">
            <slot name="footer"></slot>
        </div>
   </div>
</template>
<script>
export default {
    name:"Card",
    components:{
      
    },
    data(){
        return{
         
        }
    }
}
</script>
