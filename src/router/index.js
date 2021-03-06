import { createRouter, createWebHashHistory } from 'vue-router'
import { ClearAppState } from '../AppState'
// @ts-ignore
import Home from '../pages/Home.vue'
// @ts-ignore
import Profile from '../pages/Profile.vue'
import BlogPage from '../pages/BlogPage.vue'
import { Auth0Provider } from '@bcwdev/auth0provider-client'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: ClearAppState
  },
  {
    path: '/blog/:blogId',
    name: 'Blog',
    component: BlogPage,
    beforeEnter: ClearAppState
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    beforeEnter: Auth0Provider.authGuard
  }
]

const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

export default router
