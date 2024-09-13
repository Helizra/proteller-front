<template>
  <div class="container">
    <div class="block">
      <RegisterComponent v-if="afficheComponentRegister" />
      <LoginComponent v-else />
      <div>
        <p v-if="afficheComponentRegister">
          Vous êtes déjà inscrit ?
          <button class="change-component" @click="changeComponent">Se connecter</button>
        </p>
        <p v-else>
          Aucun compte ?
          <button class="change-component" @click="changeComponent">S'inscrire</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import RegisterComponent from '../components/RegisterComponent.vue'
import LoginComponent from '../components/LoginComponent.vue'
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth.store'

const authStore = useAuthStore()

const afficheComponentRegister = ref(false)

function changeComponent() {
  afficheComponentRegister.value = !afficheComponentRegister.value
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

p {
  font-size: 0.8rem;
  text-align: center;
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

.block {
  width: 40rem;
}
</style>
