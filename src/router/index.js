import Vue from 'vue'
import vueRouter from 'vue-router'

Vue.use(vueRouter)

const originalPush = vueRouter.prototype.push
vueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new vueRouter({
    namespace: true,
    routes: [
        {
            path: '/',
            name: 'admin',
            component: () => import('./../pages/admin.vue'),
            redirect: '/dashboard',
            children: [
                {
                    path: '/dashboard',
                    name: 'dashboard',
                    component: () => import('./../pages/dashboard.vue')
                },
                {
                    path: '/Editor',
                    name: 'Editor',
                    component: () => import('./../pages/Editor.vue'),
                },
                {
                    path: '/pageTwo',
                    name: 'pageTwo',
                    component: () => import('./../pages/pageTwo.vue'),
                },
                {
                    path: '/pageThree',
                    name: 'pageThree',
                    component: () => import('./../pages/pageThree.vue'),
                },
                {
                    path: '/pageFour',
                    name: 'pageFour',
                    component: () => import('./../pages/pageFour.vue'),
                },
                {
                    path: '/pageFive',
                    name: 'pageFive',
                    component: () => import('./../pages/pageFive.vue'),
                }
            ]
        }
    ]
})

export default router