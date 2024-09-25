<template>
  <div class="block">
    <div class="page">
      <div v-if="currentDocument" class="top-info">
        <h1>{{ currentDocument.title }}</h1>
        <div class="status">
          <div class="circle-status" :class="btnStatus"></div>
          <select v-model="currentDocument.status" @change="updateStatus">
            <option value="Draft 0">Draft 0</option>
            <option value="Draft 1">Draft 1</option>
            <option value="Draft 2">Draft 2</option>
            <option value="Draft 3">Draft 3</option>
            <option value="Draft 4">Draft 4</option>
            <option value="Draft 5">Draft 5</option>
            <option value="Draft 6">Draft 6</option>
          </select>
        </div>
      </div>
      <hr />
      <EditorComponent />
    </div>
    <div class="hide-tools" v-if="afficheToolMenu">
      <button @click="switchToolMenu">
        <PhCaretRight :size="16" color="var(--secondary-text-color)" weight="regular" />
      </button>
      <NavToolsDocComponent class="nav-tools" />
    </div>
    <div class="show-tools" v-if="!afficheToolMenu">
      <button @click="switchToolMenu">
        <PhCaretLeft :size="16" color="var(--secondary-text-color)" weight="regular" />
      </button>
      <NavToolsDocShortComponent class="nav-tools-short" />
    </div>
  </div>
</template>

<script lang="ts" setup>
//@ts-ignore
import EditorComponent from '@/components/EditorComponent.vue'
import NavToolsDocComponent from '@/components/NavToolsDocComponent.vue'
import { useProjectStore } from '@/stores/project.store'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { PhCaretLeft, PhCaretRight } from '@phosphor-icons/vue'
import NavToolsDocShortComponent from '@/components/NavToolsDocShortComponent.vue'
import type { Project } from '@/interfaces/project.model'

const route = useRoute()

const projectStore = useProjectStore()

const currentProject = computed<Project | undefined>(() =>
  projectStore.userProjects.find((project: Project) => project.id === route.params.projectid)
)

console.log(currentProject.value)

const currentDocument = computed(() => {
  const currentDoc = currentProject.value?.documents.find(
    (document) => document.id === route.params.documentid
  )
  return currentDoc
})

const btnStatus = computed(() => {
  if (currentDocument.value.status.includes(0)) {
    return 'color-draft0'
  }
  if (currentDocument.value.status.includes('1')) {
    return 'color-draft1'
  }
  if (currentDocument.value.status.includes('2')) {
    return 'color-draft2'
  }
  if (currentDocument.value.status.includes('3')) {
    return 'color-draft3'
  }
  if (currentDocument.value.status.includes('4')) {
    return 'color-draft4'
  }
  if (currentDocument.value.status.includes('5')) {
    return 'color-draft5'
  } else {
    return 'color-draft6'
  }
})

const afficheToolMenu = ref(true)

function switchToolMenu() {
  afficheToolMenu.value = !afficheToolMenu.value
}

async function updateStatus() {
  if (!currentDocument.value || !currentProject.value) {
    return
  }
  projectStore.updateDocument(currentDocument.value, currentProject.value.id)
}
</script>

<style scoped>
.block {
  display: flex;
  padding: 0;
}

.nav-tools {
  margin: 1rem;
  height: 100%;
  width: 100%;
}

.nav-tools-short {
  height: 100%;
  width: 100%;
  margin: 1rem;
  border: 0.5px solid var(--text-color);
  border-radius: 6px;
  padding: 0.8rem;
}

.page {
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  padding: 4rem 2rem 4rem 3.5rem;
}

.top-info {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: 0.5rem;
}

p {
  font-family: var(--font-text);
}

select {
  background-image: none;
  width: auto;
  font-weight: 500;
  font-size: 1rem;
}

.status {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.circle-status {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
}

.color-draft0 {
  background-color: var(--secondary-text-color);
}

.color-draft1 {
  background-color: #86b9c4;
}

.color-draft2 {
  background-color: #9ac892;
}

.color-draft3 {
  background-color: #e9ca29;
}

.color-draft4 {
  background-color: #e9936d;
}

.color-draft5 {
  background-color: #e06f68;
}

.color-draft6 {
  background-color: #d5849c;
}

hr {
  border-bottom: 0.5px solid var(--text-color);
  margin: 0;
  padding: 0.5rem;
}

.hide-tools {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 1rem 0;
  width: 290px;
  max-width: 80%;
  transition:
    opacity 0ms,
    background 0ms;
}

.show-tools {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 1rem 0;
}

button {
  border: none;
  box-shadow: none;
  padding: 0.7rem;
}

button:hover {
  background-color: var(--primary-light);
  border-radius: 50%;
}
</style>
