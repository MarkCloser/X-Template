import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export  default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            components: {
                default: () => import('@/views/quick-list.vue'),
                nav: () => import('@/views/basic/nav.vue'),
                aside: () => import('@/views/basic/aside.vue')
            }
        },
        {
            path: '/product/manage',
            components: {
                default: () => import('@/views/product/manage.vue'),
                nav: () => import('@/views/basic/nav.vue')
            }
        },
        {
            path: '/product/data',
            components: {
                default: () => import('@/views/product/data.vue'),
                nav: () => import('@/views/basic/nav.vue')
            }
        },
        {
            path: '/product/edit',
            components: {
                default: () => import('@/views/product/edit.vue'),
                nav: () => import('@/views/basic/nav.vue')
            }
        },
    ]
})