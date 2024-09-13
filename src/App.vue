<template>
  <div :class="route.name !== 'loginview' ? 'wrapper' : 'login-wrapper'">
    <MenuNavComponent v-if="route.name !== 'loginview'" />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import MenuNavComponent from './components/MenuNavComponent.vue'
import LoginView from './views/LoginView.vue'

const route = useRoute()
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 17rem 1fr;
  height: 100%;
  padding: 0.5rem 0.5rem 0.5rem 0;
}

.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
