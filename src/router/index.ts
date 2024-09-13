import { createRouter, createWebHistory } from 'vue-router'
import DocumentView from '@/views/DocumentView.vue'
import DashboardView from '@/views/DashboardView.vue'
import LoginView from '@/views/LoginView.vue'
import { useAuthStore } from '@/stores/auth.store'
import AccountView from '@/views/AccountView.vue'
import OptionsView from '@/views/OptionsView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/document/:id',
      name: 'documentview',
      component: DocumentView
    },
    {
      path: '/login',
      name: 'loginview',
      component: LoginView
    },
    {
      path: '/account',
      name: 'accountview',
      component: AccountView
    },
    {
      path: '/options',
      name: 'optionsview',
      component: OptionsView
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  console.log(to, from)
  const authStore = useAuthStore()
  if (!authStore.userData && to.name !== 'loginview') {
    if (authStore.accessToken) {
      await authStore.loadUserData()
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
