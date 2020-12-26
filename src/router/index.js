import Vue from 'vue'
import vueRouter from 'vue-router'

Vue.use(vueRouter)

const originalPush = vueRouter.prototype.push
vueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

import layout from '@/pages/admin.vue'

export const syncRoutes = [
    {
        path: '/',
        name: 'admin',
        component: layout,
        redirect: '/dashboard',
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                component: () => import('./../pages/dashboard.vue')
            },
        ]
    },
]

export const asyncRoutes = [
    {
        path: '/Editor',
        name: 'Editor',
        redirect: '/Editor/index',
        component: layout,
        children:[
            {
                path: 'index',
                name: 'Editor/index',
                component: () => import('@/pages/Editor.vue'),
            }
        ]
    },
    {
        path: '/pageTwo',
        name: 'pageTwo',
        redirect: '/pageTwo/index',
        component: layout,
        children:[
            {
                path: 'index',
                name: 'pageTwo/index',
                component: () => import('@/pages/pageTwo.vue'),
            }
        ]
    },
    {
        path: '/pageThree',
        name: 'pageThree',
        redirect: '/pageThree/index',
        component: layout,
        children:[
            {
                path: 'index',
                name: 'pageThree/index',
                component: () => import('@/pages/pageThree.vue'),
            }
        ]
    },
    {
        path: '/pageFour',
        name: 'pageFour',
        redirect: '/pageFour/index',
        component: layout,
        children:[
            {
                path: 'index',
                name: 'pageFour/index',
                component: () => import('@/pages/pageFour.vue'),
            }
        ]
    },
    {
        path: '/pageFive',
        name: 'pageFive',
        redirect: '/pageFive/index',
        component: layout,
        children:[
            {
                path: 'index',
                name: 'pageFive/index',
                component: () => import('./../pages/pageFive.vue'),
            }
        ]
    },
]

const router = new vueRouter({
    namespace: true,
    routes: syncRoutes.concat(asyncRoutes)
})

export default router