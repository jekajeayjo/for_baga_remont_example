import Vue from'vue'
import VueRouter from 'vue-router';
import Main from '../components/main.vue'
import Dekor from '../components/dekor.vue'
Vue.use(VueRouter);
const routes =[
    {path:'/',component:Main},
    {path:'/dekor',component:Dekor}
];
export  default new VueRouter({
    mode:'history',
    routes
})