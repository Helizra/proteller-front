import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { useCookies } from '@vueuse/integrations/useCookies'

export const useAuthStore = defineStore('auth', () => {
  const userData = ref(null)
  const cookies = useCookies(['accessToken'])
  const accessToken = ref(cookies.get('accessToken'))

  async function register(name: string, email: string, password: string) {
    const newUser = await axios.post('http://localhost:3000/users', {
      name: name,
      email: email,
      password: password
    })
    console.log(newUser)
  }

  async function login(email: string, password: string) {
    const loginUser = await axios.post('http://localhost:3000/auth/login', {
      email: email,
      password: password
    })
    userData.value = loginUser.data
    accessToken.value = loginUser.data.access_token
    cookies.set('accessToken', loginUser.data.access_token)
  }

  async function loadUserData() {
    const userDataResponse = await axios.get('http://localhost:3000/auth/me', {
      headers: { Authorization: 'Bearer ' + accessToken.value }
    })
    userData.value = userDataResponse.data
  }

  return { register, login, userData, accessToken, loadUserData }
})
