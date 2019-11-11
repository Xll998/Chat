<template>
    <div class="friend">
        <div class="header">
            <form action="/">
                <van-search
                    v-model="value"
                    placeholder="请输入搜索关键词"
                    show-action
                    @search="onSearch"
                    @cancel="onCancel"
                    style="background: rgb(85, 191, 240);"
                />
            </form>
        </div>
        <div class="contacts">
            <ul>
                <li
                    v-for = "(item, index) of SearchFriend"
                    :key= item._id
                >
                    <img :src=" baseUrl + item.icon "/>
                    <div class="Mesg">
                        <h3>{{ item.nikename }}</h3>
                        <p>注册时间：  {{ item.time | date}}</p>
                    </div>
                    <div class="goChat">
                        <router-link
                            class="iconfont icon-icon-test"
                            :to=" {name: 'chatRoom' , params:{data: item} }"
                            tag='i'
                            @click.native= "chat"
                         >
                        </router-link>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

import Vue from 'vue';
import { Search } from 'vant';
Vue.use(Search);

import store from '../plugins/vuex'


export default {
    name: 'friend',
    data(){
        return {
            friend: [],
            value: '',
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
    methods: {
        chat(){
            let result = '';
            
            this.friend.forEach((item, index) => {                
                if(item._id){

                }
            })
            // this.$store.commit()
        },
        onSearch(){

        },
        onCancel(){

        }
    },
    computed: {
        SearchFriend(){
            let result = [];
            this.friend.forEach((item, index) => {
                if(item.nikename.indexOf(this.value)!== -1){
                    result.push(item);
                }
            });
            return result;
        }
    },
    mounted(){

    }
}
</script>

<style>
/* @import url('//at.alicdn.com/t/font_1489416_l5rc40neb0r.css'); */



.friend >>> .van-search {
    background: rgb(85, 191, 240)!important;
}
.contacts{
margin-bottom: 1.2rem;
}
.contacts ul{

}
.contacts ul li{
    overflow: hidden;
    height: 1.2rem;
    background: #eee;
    border-bottom: .01rem dashed black;
}
.contacts ul li img{
    float: left;
    width: .8rem;
    border-radius: 50%;
    margin: .2rem .2rem;
    background: red;
}
.contacts ul li .Mesg{
    float: left;
    width: 4.3rem;
}
.contacts ul li .Mesg h3{
    margin: .14rem 
}
.contacts ul li .Mesg p{
    padding-left: .14rem;
}
.contacts ul li .goChat{
    float: right;
    margin: .14rem .3rem 0 0 ;
}
</style>