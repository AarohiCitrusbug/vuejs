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
                    <router-link to="/rendring">Rendering</router-link>
                </li>
                <li>
                    <router-link to="/modifiers">Modifiers</router-link>
                </li>
                <li>
                    <router-link to="/computed">Computed Properties</router-link>
                </li>
                <li>
                    <router-link to="/watchers">Watchers</router-link>
                </li>
                <li>
                    <router-link to="/slots">Slots</router-link>
                </li>
                <li>
                    <router-link to="/dynamic/components">Dynamic Components</router-link>
                </li>
                <li>
                    <router-link to="/reuse/mixins">Reusability with Mixins</router-link>
                </li>
                <li>
                    <router-link to="/composition/api">Composition API</router-link>
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
