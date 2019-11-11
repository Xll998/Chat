<template>
  <div class="user">
    <div class="content" :style="'background: url('+ baseUrl + user.icon +') cover;'">
      <div class="header">
        <h2>
          <img :src="baseUrl + user.icon" alt="" style="border-radius:50%"/>
        </h2>
        <div class="user-box">
          <a>{{ user.nikename }}</a>
          <br>
          <a href="javescript: ;" @click="logout" style="color:red">注销</a>
        </div>
        <ul class="clear">
          <li>
            <!--  -->
            <p>关注：<em>{{ user.follow }}</em></p>
          </li>
          <li>
            <p class="end">粉丝 <em>{{ user.fans }}</em></p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

import store from '../plugins/vuex'
import {mapGetters} from 'vuex'


export default {
  // data(){
  //   return {
  //     user:{}
  //   }
  // },
  beforeRouteEnter(to, from, next){

    // axios({
    //   url: '/api/user'
    // }).then(
    //   res => res.data.err === 0 ? next _this => _this.user=res.data.data : next("/login")
    // )
        store.state.user.err == 0 ? next() : next('/login')

  },
  methods: {
    logout(){
      axios({
        url: '/api/logout',
        method: 'delete'
      }).then(
        res => {          
          if(res.data.err === 0){
            store.commit('CLEAR_USER', {err: 1});            
            this.$router.push('/news')
          }
        }
      )
    }
  },
  computed: mapGetters(['user'])
  
};
</script>

<style scoped>
body{ background:#f2f4f5;}

.content{max-width:6.4rem; margin:0 auto; margin-bottom:0.8rem;}
.content .header{width:6.4rem;height:2.84rem; background:rgba(158, 154, 149, .3); padding-top:0.4rem;}
.header h2{width:1.02rem;height:1.02rem; border-radius:50%; margin:0 auto;}
.header h2 img{width:100%;}
.header .user-box{width:1.14rem; font-size:0.25rem; color:#fff; margin:0 auto; margin-top:0.2rem;text-align: center;}
.user-box a{color:#fff;}
.header ul{ margin-top:0.4rem;}
.header ul li{width:50%;height:0.7rem; float:left; color:#fff;}
.header ul li span{height:0.37rem; line-height:0.37rem; text-align:center; display:block; font-size:0.25rem;}
.header ul li p{ text-align:center; font-size:0.3rem;height:0.32rem; line-height:0.32rem; border-right:1px solid #fff;}
.header ul li p.end{ border:0;}

.content .docList{width:6.4rem; margin:0 auto; margin-top:0.32rem;}
.docList ul{ border-top:1px solid #7b7c7c;}
.docList ul li{ background:#fff;height:0.79rem; border-top:1px solid #bcbbba; border-bottom:1px solid #7b7c7c;}
.docList ul li span{ float:right;margin-right:0.14rem; margin-top:0.26rem;}
.docList ul li b{width:0.21rem;height:0.24rem; background:url(../assets/img/next_img.png) no-repeat 0 0; background-size:100%; float:right;margin-right:0.34rem; margin-top:0.28rem;}


.docList ul .gk-text i{width:0.37rem;height:0.37rem; background:url(../assets/img/gk_text.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.29rem; margin-top:0.24rem;}
.gk-text p{ float:left; font-size:0.25rem;margin-left:0.29rem; margin-top:0.25rem;}
.docList ul .mm-text i{width:0.29rem;height:0.35rem; background:url(../assets/img/mm_text.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.32rem; margin-top:0.24rem;}
.mm-text p{ float:left; font-size:0.25rem;margin-left:0.35rem; margin-top:0.25rem;}
.docList ul .cg-text i{width:0.37rem;height:0.37rem; background:url(../assets/img/cg_text.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.29rem; margin-top:0.24rem;}
.cg-text p{ float:left; font-size:0.25rem;margin-left:0.29rem; margin-top:0.25rem;}
.docList ul .sc-text i{width:0.37rem;height:0.37rem; background:url(../assets/img/sc_text.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.29rem; margin-top:0.24rem;}
.sc-text p{ float:left; font-size:0.25rem;margin-left:0.29rem; margin-top:0.25rem;}
.docList ul .my_cz{ margin-top:0.45rem;}
.docList ul .my_cz i{width:0.37rem;height:0.37rem; background:url(../assets/img/my_cz.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.29rem; margin-top:0.24rem;}
.my_cz p{ float:left; font-size:0.25rem;margin-left:0.29rem; margin-top:0.25rem;}



</style>