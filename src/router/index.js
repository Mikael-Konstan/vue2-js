import Vue from 'vue'
import vueRouter from 'vue-router'

Vue.use(vueRouter)

const originalPush = vueRouter.prototype.push
vueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

import layout from '@/pages/layout/index.vue'

export const syncRoutes = [
    {
        path: '/',
        name: 'admin',
        component: layout,
        redirect: '/dashboard',
        meta: {
            icon: 'el-icon-s-home',
            title: 'dashboard',
        },
        children: [
            {
                path: 'dashboard',
                name: 'dashboard',
                component: () => import('./../pages/dashboard/index.vue')
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
        meta: {
            icon: 'el-icon-location',
            title: 'Editor',
        },
        children:[
            {
                path: '/Editor/index',
                name: 'Editor/index',
                meta: {
                    icon: 'el-icon-location',
                    title: 'wangEditor',
                },
                component: () => import('@/pages/Editor/index.vue'),
            },
            {
                path: '/Editor/two',
                name: 'Editor/two',
                meta: {
                    title: 'editorTwo',
                },
                component: () => import('@/pages/Editor/index.vue'),
            },
        ]
    },
    {
        path: '/pageTwo',
        name: 'pageTwo',
        redirect: '/pageTwo/index',
        component: layout,
        meta: {
            icon: 'el-icon-menu',
            title: 'pageTwo',
        },
        children:[
            {
                path: 'index',
                name: 'pageTwo/index',
                component: () => import('@/pages/pageTwo/index.vue'),
            }
        ]
    },
    {
        path: '/pageThree',
        name: 'pageThree',
        redirect: '/pageThree/index',
        component: layout,
        meta: {
            icon: 'el-icon-document',
            title: 'pageThree',
        },
        children:[
            {
                path: '/pageThree/index',
                name: 'pageThree/index',
                component: () => import('@/pages/pageThree/index.vue'),
            }
        ]
    },
    {
        path: '/pageFour',
        name: 'pageFour',
        redirect: '/pageFour/index',
        component: layout,
        meta: {
            icon: 'el-icon-setting',
            title: 'pageFour',
        },
        children:[
            {
                path: 'index',
                name: 'pageFour/index',
                component: () => import('@/pages/pageFour/index.vue'),
            }
        ]
    },
    {
        path: '/pageFive',
        name: 'pageFive',
        redirect: '/pageFive/index',
        component: layout,
        meta: {
            icon: 'el-icon-setting',
            title: 'pageFive',
        },
        children:[
            {
                path: 'index',
                name: 'pageFive/index',
                component: () => import('@/pages/pageFive/index.vue'),
            }
        ]
    },
]

const router = new vueRouter({
    namespace: true,
    routes: syncRoutes.concat(asyncRoutes)
})

export default router