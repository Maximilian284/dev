import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useLenis } from '../src/plugins/lenis.js'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
useLenis()

app.mount('#app')