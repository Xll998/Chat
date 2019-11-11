<template>
  <div id="app">
    <Loading v-if=" $store.state.BeLoading " ></Loading>
    <transition>
    <router-view></router-view>
    </transition>
    <Footer v-if=' $store.state.BeFoo '></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer'
import Loading from './components/Loading'


import './assets/js/font'
import './assets/css/base.css'

// import 'bootstrap/dist/css/bootstrap.css'

export default {
  name: 'app',
  components: {
    Footer,Loading
  },
  updated(){    
    if(/detail/.test(this.$route.path) || /chatRoom/.test(this.$route.name)){      
      this.$store.commit('UPDATE_BEFOO', false)
    }else{
      this.$store.commit('UPDATE_BEFOO', true)
    }
  }
}
</script>

<style>
</style>