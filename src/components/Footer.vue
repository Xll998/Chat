<template>
  <div class="foot-btn">
    <ul>
      <!-- <router-link class="home" active-class="home_active" tag="li">
        <a href="javascript: ;">首页</a>
      </router-link> -->
      <router-link to='/chat' tag='li' class="chat" active-class="active">
        <a href="javascript: ;"  class="iconfont icon-icon-test"></a>
        <i>聊天</i>
      </router-link>
      <router-link to='/friend' tag='li' class="friend" active-class="active">
        <a href="javascript:;" class="iconfont icon-icon-test2"></a>
        <i>联系人</i>
      </router-link>
      <router-link to='/news' tag='li' class="news" active-class="active">
        <a href="javascript:;" class="iconfont icon-icon-test3"></a>
        <i>咨讯</i>
      </router-link>
      <router-link to='/user' tag='li' class="my" active-class="active">
        <a href="javascript:;" class="iconfont icon-icon-test1"></a>
        <i>我</i>
      </router-link >
    </ul>
  </div>
</template>

<script>


export default {
  
}
</script>

<style scoped>
@import url('//at.alicdn.com/t/font_1489416_l5rc40neb0r.css');

.foot-btn {
  width: 100%;
  height: 1rem;
  background: #e3e5e6;
  position: fixed;
  z-index: 2;
  left: 0;
  bottom: 0;
}
.foot-btn ul {
  width: 5.8rem;
  margin: 0 auto;
  display:flex;
  justify-content: space-around
}
.foot-btn ul li {
  float: left;
  width: 1rem;
  text-align: center;
}
.foot-btn ul li.active a,li.active i{
  color: rgb(85, 191, 240);
}

.foot-btn ul li a {
  color: #666;
  display: block;
  width: .8rem;
  height: .4rem;
  font-size: .4rem;
  margin-top: 0.1rem;
}
.foot-btn ul li i{
  font-size: .2rem;
  font-style: normal;
  margin-left: -.14rem;
}

</style>