import Vue from 'vue'
console.log('ok')

import 'mint-ui/lib/style.css'
import './css/lib/mui/css/mui.css'

import { Header } from 'mint-ui';

Vue.component(Header.name, Header);

import app from './App.vue'

var vm = new Vue({
    el: '#app',
    render: c=>c(app)
})