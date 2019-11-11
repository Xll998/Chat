import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from './plugins/router';

import './plugins/axios'

import serve from './config/serve'
Vue.prototype.baseUrl = serve.baseUrl


//注册全局过滤器
import filters from './filters'

import store from './plugins/vuex'



let local = window.localStorage.getItem('1909_news_app')

if(local){
  store.commit('UPDATE_USER',JSON.parse(local));
}



for(var key in filters){
  Vue.filter(key, filters[key]);
}


new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
