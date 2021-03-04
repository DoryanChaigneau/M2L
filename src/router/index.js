import Vue from 'vue'
import VueRouter from 'vue-router'
import Connection from '../views/Connection.vue'
import Home from '../views/Home.vue'
import ReservationParam from '../views/ReservationParam.vue'
import ReservationSelect from '../views/ReservationSelect.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Connection',
    component: Connection
  },
  {
    path: '/home',
    name: 'Home',
    component:  Home
  },
  {
    path: '/rp',
    name: 'ReservationParam',
    component:  ReservationParam
  },
  {
    path: '/rs',
    name: 'ReservationSelect',
    component: ReservationSelect
  }
]

const router = new VueRouter({
  routes
})

export default router
