<template>
  <div :class="wrapperClass">
    <MenuNavComponent
      v-if="
        route.name === 'home' ||
        route.name === 'projectview' ||
        route.name === 'accountview' ||
        route.name === 'optionsview' ||
        route.name === 'helpview' ||
        route.name === 'feedbackview'
      "
    />
    <MenuNavDocComponent
      v-if="
        wrapperClass !== 'full-screen-wrapper' &&
        currentProject &&
        (route.name === 'documentview' ||
          route.name === 'optionsdocview' ||
          route.name === 'styleview' ||
          route.name === 'dashboardview')
      "
      @switch-full-screen-mode="switchFullScreenMode"
      :current-project="currentProject"
    />
    <RouterView />
  </div>

  <button @click="switchFullScreenMode(false)" v-if="fullScreenMode">
    <PhList :size="16" color="var(--text-color)" weight="regular" />
  </button>
</template>

<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import MenuNavComponent from './components/MenuNavComponent.vue'
import MenuNavDocComponent from './components/MenuNavDocComponent.vue'
import { computed, ref, watch } from 'vue'
import { useProjectStore } from './stores/project.store'
import type { Project } from './interfaces/project.model'
import { PhList } from '@phosphor-icons/vue'

const projectStore = useProjectStore()
const route = useRoute()
const fullScreenMode = ref<boolean>(false)

const wrapperClass = computed<string>(() => {
  if (route.name === 'loginview') {
    return 'login-wrapper'
  }
  if (fullScreenMode.value) {
    return 'full-screen-wrapper'
  } else {
    return 'wrapper'
  }
})

function switchFullScreenMode(fullScreen: boolean) {
  fullScreenMode.value = fullScreen
}

const currentProject = computed<Project | undefined>(() => {
  return projectStore.userProjects.find((project) => {
    return project.id === route.params.projectid
  })
})

watch(route, () => {
  fullScreenMode.value = false
})
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 17rem 1fr;
  height: 100%;
  padding: 0.5rem 0.5rem 0.5rem 0;
}

.full-screen-wrapper {
  display: grid;
  height: 100%;
  padding: 0.5rem;
}

.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

button {
  position: absolute;
  top: 1rem;
  left: 1rem;
  border: none;
  box-shadow: none;
  background-color: transparent;
  border-radius: 0;
  padding: 0.7rem;
}

button:hover {
  background-color: var(--primary-light);
  border-radius: 50%;
}
</style>
