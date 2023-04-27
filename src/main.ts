import { createApp } from 'vue'

import App from './App.vue'

import './assets/main.css'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { store } from './store'

const app = createApp(App)

app.use(VueQueryPlugin)
app.use(store)

app.mount('#app')
