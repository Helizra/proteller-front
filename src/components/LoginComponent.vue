<template>
  <TitleComponent>
    <PhSignIn :size="36" color="var(--text-color)" weight="regular" />
    <h1>Se connecter</h1>
  </TitleComponent>
  <form @submit.prevent="submit">
    <div class="form-input">
      <label for="email">Email</label>
      <input v-model="email" type="email" id="email" name="email" />
    </div>

    <div class="form-input">
      <label for="password">Mots de passe</label>
      <input v-model="password" type="password" id="password" name="password" />
    </div>
    <p class="error" v-if="loginError && typeof loginError === 'string'">{{ loginError }}</p>
    <div v-if="loginError && typeof loginError === 'object'">
      <p class="error" v-for="error in loginError">{{ error }}</p>
    </div>
    <button type="submit">Continuer</button>
  </form>
</template>

<script setup lang="ts">
import { PhSignIn } from '@phosphor-icons/vue'
import TitleComponent from './TitleComponent.vue'
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth.store'

const authStore = useAuthStore()

const email = ref('')
const password = ref('')
const loginError = ref(null)

async function submit() {
  try {
    await authStore.login(email.value, password.value)
  } catch (error: any) {
    loginError.value = error.response.data.message
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto 0 auto;
  padding: 0 6rem;
}

button {
  margin-bottom: 1.5rem;
  align-self: flex-end;
}

p {
  font-size: 0.8rem;
}

.error {
  color: red;
  font-weight: 600;
  padding-bottom: 1.2rem;
}
</style>
