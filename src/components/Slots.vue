<template>
    <Header/>
    <div class="row">
        <div class="col-sm-3"> <Sidebar/></div>
        <div class="col-sm-9 mt-5">  
            <Card>Card Content</Card>
            <Card>
                <b>Card Content</b>
                <p v-text="para"></p>
            </Card>
            <Card>
                <template v-slot:header><h5><b>Lorem Ipsum</b></h5></template>
                <template v-slot:default>
                    <p v-text="para"></p>
                </template>
                <template v-slot:footer>
                    <a href="#">Click on to view more details</a>
                </template>
            </Card>
        </div>
    </div>
</template>
<script>
import Header from './Layouts/Header.vue';
import Sidebar from './Layouts/Sidebar.vue';
import Card from './Card.vue';
export default {
    name:"Watchers",
    components:{
        Header,
        Sidebar,
        Card
    },
    data(){
        return{
            para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
    }
}
</script>
