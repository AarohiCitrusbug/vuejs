<template>
    <div class="row">
        <div class="col-sm-9 mt-5">  
            <div>
                <h3 @mouseover="incrementCOunt">Clicked {{count}} times</h3>
            </div>
        </div>
    </div>
</template>
<script>

import CounterMixins from '../mixins/counter';
export default {
    name:"HoverCounter",
    mixins:[CounterMixins],
    data(){
        return{
        }
    }
}
</script>
