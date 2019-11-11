import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import User from '../pages/User'
import Login from '../pages/Login'
import Reg from '../pages/Reg'
import News from '../pages/News'
import Detail from '../pages/Detail'
import Chat from '../pages/Chat'
import Friend from '../pages/Friend'
import ChatRoom from '../pages/ChatRoom'
import Nologin from '../pages/Nologin'
import ErrorPages from '../pages/ErrorPages'


let routes = [
    {path:'/user', component: User},
    {path:'/login', component: Login},
    {path:'/reg', component: Reg},
    {path:'/news', component: News},
    {path:'/news/detail/*', component: Detail},
    {path:'/chat', component: Chat},
    {path:'/friend', component: Friend},
    {name: 'chatRoom', path:'/chatRoom/*', component: ChatRoom},
    {path:'/nologin', component: Nologin},
    {path: "/", redirect: "/news"},
    {path: "*", component: ErrorPages}
]


let router = new VueRouter({
    mode: 'hash',
    routes
})

export default router;