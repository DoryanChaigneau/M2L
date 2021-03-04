import Vue from 'vue'
import VueRouter from 'vue-router'
import Connection from '../views/Connection.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Connection',
    component: Connection
  },
]

const router = new VueRouter({
  routes
})

export default router
