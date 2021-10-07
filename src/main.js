import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import { Plugin } from 'vue-fragment';
Vue.use(Plugin);
import axios from 'axios';
Vue.prototype.$axios = axios;


Vue.config.productionTip = false

new Vue({
  render: h => h(App),router,store
}).$mount('#app')
