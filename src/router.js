import VueRouter from 'vue-router'

import Home from './components/tabbar/homeContainer.vue'
import Member from './components/tabbar/memberContainer.vue'
import Cart from './components/tabbar/cartContainer.vue'
import Search from './components/tabbar/searchContainer.vue'

var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: Home },
        { path: '/member', component: Member },
        { path: '/cart', component: Cart },
        { path: '/search', component: Search }
    ],
    linkActiveClass: 'mui-active'
})

export default router