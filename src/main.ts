import { createApp } from 'vue'
import './reset.css'
import App from './App.vue'


import router from './router'

const app = createApp(App)

app.use(router)      // aqui sim!
app.mount('#app')
