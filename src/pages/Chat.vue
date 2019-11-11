<template>
  <div class="chat">
    <div class="contain">
      <ul>
        <li
          v-for="(item, index) in this.chat"
          :key="index"
        >
          <img :src=" baseUrl + item.icon " />
          <div class="Mesg">
            <h3>{{ item.nikename }}</h3>
            <p>几里哇啦的内容内容内容</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "chat",
  data(){
    return {
      chat: []
    }
  },
  beforeRouteEnter(to, from, next){
    let local = window.localStorage.getItem('1909_news_app');        
    axios({
        url: '/api/friend',
        params: local
    }).then(
        res => {
            if(window.localStorage.getItem('1909_news_app')){
                next(_this => _this.friend = res.data.data)
            }else{
                next('/nologin');
            }
        }
    )
  },
  created() {
    // axios({
    //     url: '/api/chat'
    // }).then(
    //     res => {
    //     }
    // )
    this.chat = this.$store.state.ChatMst;
    if(!chat){

    }
  }
};
</script>

<style scoped>
.contain {
  background: #ccc;
}
.contain ul li {
  overflow: hidden;
  height: 1.4rem;
  background: #eee;
}
.contain ul li img {
  float: left;
  width: 1rem;
  border-radius: 50%;
  margin: 0.2rem 0.2rem;
  background: red;
}
.contain ul li .Mesg {
  float: left;
  width: 4.4rem;
}
.contain ul li .Mesg h3 {
  margin: 0.18rem;
}
.contain ul li .Mesg p {
  padding-left: 0.18rem;
}
</style>