import Vue from 'vue'
console.log('ok')
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import router from './router.js'

import 'mint-ui/lib/style.css'
import './css/lib/mui/css/mui.css'

import { Header, Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);

import app from './App.vue'
import './css/icons-extra.css'
import axios from 'axios'

Vue.prototype.$axios = axios
// import VueResource from 'vue-resource'
// Vue.use(VueResource)

var vm = new Vue({
    el: '#app',
    render: c=>c(app),
    router
})