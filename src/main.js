import './assets/main.css'

import { createRouter, createWebHashHistory } from 'vue-router'

import { createApp } from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import Graph from './Graph.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/g', component: Graph },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
      return { top: 0 }
    }
  })

const app = createApp(App)
app.use(router)
app.mount('#app')
