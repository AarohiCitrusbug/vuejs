<template>
    <div class="row">
        <div class="col-sm-9 mt-5">  
            <div>
                <button @click="incrementCOunt">Clicked {{count}} times</button>
            </div>
        </div>
    </div>
</template>
<script>

import CounterMixins from '../mixins/counter';
export default {
    name:"ClickCounter",
    mixins:[CounterMixins],
    data(){
        return{
        }
    }
}
</script>
