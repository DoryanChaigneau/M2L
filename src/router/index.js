import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/connecion',
    name: 'Connection',
    component: () => import(/* webpackChunkName: "Connection" */ '../views/Connection.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
