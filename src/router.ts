import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

console.log(process.env.BASE_URL)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/home',
            component:  () => import('@/views/home.vue')
        },
        {
            path: '/login',
            component:  () => import('@/views/login.vue')
        },
        {
            path: '/dashboard',
            component: () => import('@/views/dashboard.vue')
        }
    ]
})