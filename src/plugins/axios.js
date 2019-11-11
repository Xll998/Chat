import Vue from 'vue'
import axios from 'axios'
import store from '../plugins/vuex'

axios.interceptors.request.use(function (config) {
    // Do something before request is sent

    //

    store.commit('UPDATE_BELOADING',true)
    // console.log(store.getters.Beloading);
    
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
 
// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data


    store.commit('UPDATE_BELOADING',false)
    // console.log(store.getters.Beloading);

    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });




Vue.prototype.axios = axios

window.axios = axios

export default axios