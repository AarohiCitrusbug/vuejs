<template>
    <div class="row">
        <div class="col-sm-9 mt-5">  
            <div>
                <h3 @mouseover="incrementCount">Clicked {{count}} times</h3>
            </div>
        </div>
    </div>
</template>
<script>

import userCounter from './composable/userCounter';
export default {
    name:"CompositionHoverCounter",
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
