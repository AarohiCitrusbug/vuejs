import { createApp } from 'vue'
import App from './App.vue'

import router from './routes'

import '../src/assets/scss/styles.scss'
import "bootstrap/dist/css/bootstrap.min.css"
 
createApp(App).use(router).mount('#app');