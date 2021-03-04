import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/connecion',
    name: 'Connexion',
    component: () => import('../views/Connection.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
