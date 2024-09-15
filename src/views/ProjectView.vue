<template>
  <div class="block">
    <TitleComponent>
      <h1>{{ currentProject?.title }}</h1>
    </TitleComponent>
    <p>{{ currentProject?.documents.length }}</p>
    <button class="btn-add" @click="createDocument">
      <PhFile :size="17" color="var(--text-color)" weight="regular" />
      Nouveau document
    </button>
    <Transition name="fade">
      <NewDocumentFormComponent
        v-if="afficheModalDocument"
        @hide-form="hideFormDocument"
        :project-id="currentProject?.id"
      />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import TitleComponent from '@/components/TitleComponent.vue'
import { useProjectStore } from '@/stores/project.store'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { PhFile } from '@phosphor-icons/vue'
import NewDocumentFormComponent from '@/components/NewDocumentFormComponent.vue'

const route = useRoute()
const projectStore = useProjectStore()
const afficheModalDocument = ref(false)
const currentProject = computed(() => {
  return projectStore.userProjects.find((project) => {
    return project.id === route.params.id
  })
})

function createDocument() {
  afficheModalDocument.value = true
}

function hideFormDocument() {
  afficheModalDocument.value = false
}
</script>

<style scoped></style>
