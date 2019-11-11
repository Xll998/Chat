<template>
    <div class="chatRoom">
        <van-nav-bar
            :title = person.data.nikename
            left-text="返回"
            right-text=""
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
        />
        <div class="content">
          <ul>
            <li></li>
          </ul>
        </div>
        <van-cell-group>
          <van-field
            v-model="sms"
            center
            clearable
            label="留言"
            placeholder="请输入"
          >
            <van-button slot="button" size="small" type="primary" @click="send">发送</van-button>
          </van-field>
        </van-cell-group>
    </div>
</template>

<script>

import Vue from 'vue';
import { NavBar } from 'vant';
import { Field } from 'vant';
import { CellGroup } from 'vant';
import { Button } from 'vant';

Vue.use(CellGroup);
Vue.use(Button);
Vue.use(Field);
Vue.use(NavBar);


export default {
  name: 'chatRoom',
  data(){
    return {
      chat: [],
      sms: '',
      person: {}
    }
  },
  methods: {
    onClickLeft() {
      this.$router.push('/chat')
    },
    onClickRight() {
    },
    send(){

    }
  },
  created(){
    this.person = this.$route.params;    
  },
  destroyed(){
    this.$store.commit('ADD_CHAT', this.person.data)
  }
}
</script>

<style scoped>
.content{

}
.content ul{

}
.content ul li{

}
</style>