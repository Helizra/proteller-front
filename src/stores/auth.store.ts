import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { useCookies } from '@vueuse/integrations/useCookies'
import { useRouter } from 'vue-router'
import type { User } from '@/interfaces/user.model'

export const useAuthStore = defineStore('auth', () => {
  const userData = ref<User | null>(null)
  const cookies = useCookies(['accessToken'])
  const accessToken = ref(cookies.get('accessToken'))
  const router = useRouter()

  async function register(name: string, email: string, password: string) {
    const newUser = await axios.post('http://localhost:3000/auth/register', {
      name: name,
      email: email,
      password: password
    })
    console.log(newUser)
    userData.value = newUser.data
    accessToken.value = newUser.data.access_token
    cookies.set('accessToken', newUser.data.access_token)
    router.push('/')
  }

  async function login(email: string, password: string) {
    const loginUser = await axios.post('http://localhost:3000/auth/login', {
      email: email,
      password: password
    })
    userData.value = loginUser.data
    accessToken.value = loginUser.data.access_token
    cookies.set('accessToken', loginUser.data.access_token)
    router.push('/')
  }

  async function loadUserData() {
    const userDataResponse = await axios.get('http://localhost:3000/auth/me', {
      headers: { Authorization: 'Bearer ' + accessToken.value }
    })
    userData.value = userDataResponse.data
  }

  function logOut() {
    userData.value = null
    accessToken.value = null
    cookies.remove('accessToken')
  }

  return { register, login, userData, accessToken, loadUserData, logOut }
})
