import './assets/main.css'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import Main from './main.vue'

const app = createApp(Main)
app.use(ElementPlus)
app.mount('#app')
