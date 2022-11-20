<template>
    <div class="row">
        <div class="col-sm-9 mt-5">  
            <div>
                <button @click="incrementCount">Clicked {{count}} times</button>
            </div>
        </div>
    </div>
</template>
<script>

import userCounter from './composable/userCounter';
export default {
    name:"CompositionClickCounter",
    setup(){
        const{count,incrementCount} = userCounter()
        return{
            count,
            incrementCount
        }
    },
    data(){
        return{
        }
    }
}
</script>
