<template>
    <div class="Nologin">
        <h3>未登录</h3>
        <router-link
            tag='button'
            to = '/login'
            active-class='botton'
        >
        去登录
        </router-link>
    </div>
</template>

<style scoped>
.Nologin{
    display:flex;
    justify-content:space-around;
    align-items: center;
    height: 100%;
    width: 100%;
}
.button{
    display: block;
    height: .8rem;
    width: 2.8rem;
}
</style>