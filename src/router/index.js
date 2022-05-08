import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView/AboutView.vue'),
    children: [
      {
        name: 'overview',
        path: 'overview',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView/AboutView.vue')
      },
      {
        name: 'certificates',
        path: 'certs',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView/AboutCerts.vue')
      },
      {
        name: 'history',
        path: 'history',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView/AboutHistory.vue')
      },
      {
        name: 'culture',
        path: 'culture',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView/AboutCulture.vue')
      },
      {
        name: 'team',
        path: 'team',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView/AboutTeam.vue')
      },
      {
        name: 'video',
        path: 'video',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView/AboutVideo.vue')
      },
    ]
  },
  {
    path: '/product',
    name: 'product',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductView/ProductView.vue'),
    children: [
      {
        name: 'recycle',
        path: '/recycle',
        component: () => import(/* webpackChunkName: "about" */ '../views/ProductView/ProductRecycle.vue')
      },
      {
        name: 'case',
        path: 'case',
        component: () => import(/* webpackChunkName: "about" */ '../views/ProductView/ProdUseCase.vue')
      },
    ]
  },
  {
    path: '/news',
    name: 'news',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/NewsView/NewsView.vue')
  },
  {
    path: '/career',
    name: 'career',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CareerView/CareerView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactUs.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
