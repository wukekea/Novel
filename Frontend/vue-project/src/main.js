import './assets/main.css'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import Main from './main.vue'

import 'element-plus/dist/index.css'


const app = createApp(Main)
app.use(ElementPlus)
app.mount('#app')
