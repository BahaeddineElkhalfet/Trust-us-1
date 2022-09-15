import shareExperienceVue from '@/views/shareExperience.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SigninView from '../views/SigninView'





const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView ,
  },
  {
    path: '/Experience',
    name: 'Experience',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ExperienceView.vue')
  },
  {
    path: '/Signin',
    name: 'Signin',
    component:SigninView
   },
  {
    path: '/SignUp',
    name: 'SignUp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SignUp.vue')
  },
  {
    path:'/share',
    name: 'Share',
    component:shareExperienceVue
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
