import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import regeneratorRuntime from "regenerator-runtime";
import 'element-ui/lib/theme-chalk/index.css';
import indexPage from './pages/index-page/index'
Vue.use(VueRouter)
Vue.use(ElementUI);
const routes = [
    { path: '/', component: indexPage },
]

const router = new VueRouter({
    routes
})

new Vue({
    el: "#app",
    router: router,
    template:`<router-view></router-view>`
})