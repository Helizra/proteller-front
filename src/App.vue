<template>
  <div :class="route.name !== 'loginview' ? 'wrapper' : 'login-wrapper'">
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
        currentProject &&
        (route.name === 'documentview' ||
          route.name === 'optionsdocview' ||
          route.name === 'styleview')
      "
      :current-project="currentProject"
    />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import MenuNavComponent from './components/MenuNavComponent.vue'
import MenuNavDocComponent from './components/MenuNavDocComponent.vue'
import { computed } from 'vue'
import { useProjectStore } from './stores/project.store'
import type { Project } from './interfaces/project.model'

const projectStore = useProjectStore()
const route = useRoute()
const currentProject = computed<Project | undefined>(() => {
  return projectStore.userProjects.find((project) => {
    return project.id === route.params.projectid
  })
})
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
