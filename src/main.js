import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './style.css'

import { createPersistedState } from 'pinia-plugin-persistedstate'
// import { piniaPluginPersistedstate } from 'pinia-plugin-persistedstate'


const app = createApp(App);
const pinia = createPinia();
pinia.use(createPersistedState)

app.use(router)
app.use(pinia)
app.mount('#app');
