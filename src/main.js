import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import { Plugin } from 'vue-fragment';
Vue.use(Plugin);





Vue.config.productionTip = false

new Vue({
  render: h => h(App),router
}).$mount('#app')
