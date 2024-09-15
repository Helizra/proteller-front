import { createRouter, createWebHistory } from 'vue-router'
import DocumentView from '@/views/DocumentView.vue'
import DashboardView from '@/views/DashboardView.vue'
import LoginView from '@/views/LoginView.vue'
import { useAuthStore } from '@/stores/auth.store'
import AccountView from '@/views/AccountView.vue'
import OptionsView from '@/views/OptionsView.vue'
import HelpView from '@/views/HelpView.vue'
import FeedbackView from '@/views/FeedbackView.vue'
import { useProjectStore } from '@/stores/project.store'
import ProjectView from '@/views/ProjectView.vue'

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
      path: '/project/:id',
      name: 'projectview',
      component: ProjectView
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
    },
    {
      path: '/help',
      name: 'helpview',
      component: HelpView
    },
    {
      path: '/feedback',
      name: 'feedbackview',
      component: FeedbackView
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  console.log(to, from)
  const authStore = useAuthStore()
  const projectStore = useProjectStore()
  if (!authStore.userData && to.name !== 'loginview') {
    if (authStore.accessToken) {
      try {
        await authStore.loadUserData()
        await projectStore.loadProjects()
      } catch (error) {
        authStore.logOut()
        next('/login')
      }
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
