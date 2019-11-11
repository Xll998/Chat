<template>
  <div class="newsList">
    <ul>
      <router-link
        v-for="(item, index) of home"
        :key= index
        :to="'/news/detail/' + item._id"
        tag="li"
      >
        <a href="javascript: ;">
          <h2>{{item.title}}</h2>
          <p>{{item.content}}</p>
        </a>
      </router-link>

    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      home: [],
      q: ''
    }
  },
  mounted(){
    axios({
      url: '/api/home',
      // params: {
      //   q: this.q
      // }
    }).then(
      res => res.data.err == 0 ? this.home = res.data.data : null
    )
  }
}
</script>

<style  scoped>
.content .newsList{width:6.4rem; margin:0 auto;}
.newsList ul{ padding:0 0.4rem;}
.newsList ul li{ color:#494d4d; padding:0.2rem 0; border-bottom:1px dashed #ccc;}
.newsList ul li h2{max-height:0.5rem; font-size:0.33rem; overflow:hidden;}
.newsList ul li p{height:1rem; width: 100%; margin-top:0.05rem;
width: 5.8rem;
overflow: hidden;
text-overflow: ellipsis;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical; }
.newsList{clear: both;margin-bottom:1rem;}
</style>