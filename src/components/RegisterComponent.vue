<template>
  <TitleComponent>
    <PhUser :size="36" color="var(--text-color)" weight="regular" />
    <h1>S'inscrire</h1>
  </TitleComponent>
  <form @submit.prevent="submit">
    <div class="form-input">
      <label for="name">Nom</label>
      <input v-model="name" type="text" id="name" name="name" />
    </div>

    <div class="form-input">
      <label for="email">Email</label>
      <input v-model="email" type="email" id="email" name="email" />
    </div>

    <div class="form-input">
      <label for="password">Mots de passe</label>
      <input v-model="password" type="password" id="password" name="password" />
    </div>

    <button type="submit">S'inscrire</button>
  </form>
</template>

<script setup lang="ts">
import { PhUser } from '@phosphor-icons/vue'
import TitleComponent from './TitleComponent.vue'
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth.store'

const authStore = useAuthStore()

const name = ref('')
const email = ref('')
const password = ref('')

function submit() {
  authStore.register(name.value, email.value, password.value)
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

input {
  border: none;
  font-weight: 800;
  padding: 0;
  padding-top: 0.1rem;
}

input:focus {
  outline: none;
  font-weight: 800;
}

.form-input {
  border: 0.5px solid var(--border-color);
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem;
  margin-bottom: 1.2em;
  width: 100%;
}

label {
  font-size: 0.7rem;
  font-family: var(--font-text);
  color: var(--secondary-text-color);
  font-weight: 700;
}

button {
  margin-bottom: 1.5rem;
  align-self: flex-end;
}

p {
  font-size: 0.8rem;
}

.change-component {
  text-decoration: underline;
  font-family: var(--font-text);
  font-weight: 700;
  color: var(--primary-color);
  padding: 0;
  border: none;
  box-shadow: none;
  font-size: 0.8rem;
}
</style>
