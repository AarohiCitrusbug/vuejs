<template>
    <div class="wrapper d-flex align-items-stretch">
		<nav id="sidebar">
            <ul class="list-unstyled components mb-5">
            <li class="active">
                <router-link to="/">Dashboard</router-link>
            </li>
            <li>
                <router-link to="/binding">Binding</router-link>
            </li>
            <li>
                <a href="#">Rendering</a>
            </li>
            <li>
                <a href="#">Methods, Event handling, Form handling, Modifiers</a>
            </li>
            <li>
                <a href="#">Computed properties, Setters, Watchers</a>
            </li>
            <li>
                <a href="#">Components with props, Prop types & validations</a>
            </li>
            <li>
                <a href="#">Provide & inject, Events, Components & v-model</a>
            </li>
            <li>
                <a href="#">Slot and styles</a>
            </li>
            <li>
                <a href="#">Dynamic components, Teleport components</a>
            </li>
            <li>
                <a href="#">HTTP & Vue</a>
            </li>
            <li>
                <a href="#">Lifecycle Hooks, Template refs</a>
            </li>
            <li>
                <a href="#">Mixins, Composition API</a>
            </li>
            </ul>
    	</nav>
		</div>
</template>
<script>
export default {
    name:"Sidebar",
    data(){
    }
}
</script>
