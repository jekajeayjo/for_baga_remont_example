import Vue from 'vue'
import VueResource from 'vue-resource'
import App from '../pages/App.vue'
import router from "../router/router";
import map from '../pictures/1.jpg'

Vue.use(VueResource),
Vue.use(map)
new Vue({
    el: '#app',
    router,
    render: a => a(App)
})