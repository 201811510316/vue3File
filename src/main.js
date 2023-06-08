import { createApp } from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import router from './router';
import store from './store';
import * as Icons from '@element-plus/icons-vue'

const app = createApp(App)

for (let i in Icons) {
    app.component(i, Icons[i])
}

app.use(ElementPlus)
app.use(router)
app.use(store)
app.use(Vuex)
app.mount('#app')
