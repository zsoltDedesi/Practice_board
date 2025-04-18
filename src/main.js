import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './styles/index.css'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App);
const pinia = createPinia();

pinia.use(piniaPluginPersistedstate)

app.use(router)
app.use(pinia)
app.use(Toast)
app.mount('#app');
