import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import router from './router/index.js';
import store from './store/index.js';
import * as Icons from '@element-plus/icons-vue'

const app = createApp(App)

for (let i in Icons) {
    app.component(i, Icons[i])
}

app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')
