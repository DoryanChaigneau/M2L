import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Axios from 'axios'
import vuetify from './plugins/vuetify';

Axios.defaults.baseURL = "http://127.0.0.1:8000/api/"
Axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        config.headers.common = {}
    }

    return config;
}, function (error) {
    // Do something with request error
    //clear localstorage
    //route push screen login
    return Promise.reject(error);
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
