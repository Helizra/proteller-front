<template>
  <section>
    <div class="menu">
      <div class="project">
        <h2>{{ currentProject?.title }}</h2>
        <button class="hide-menu" @click="emit('switchFullScreenMode', true)">
          <PhCaretDoubleLeft :size="16" color="var(--text-color)" weight="regular" />
        </button>
      </div>

      <nav>
        <RouterLink to="/">
          <PhHouse :size="16" color="var(--secondary-text-color)" weight="regular" />
          Home
        </RouterLink>

        <RouterLink :to="'/' + currentProject.id + '/dashboard'">
          <PhBook :size="16" color="var(--secondary-text-color)" weight="regular" />
          Dashboard
        </RouterLink>

        <RouterLink :to="'/' + currentProject.id + '/style'">
          <PhTextAa :size="16" color="var(--secondary-text-color)" weight="regular" />
          Styles
        </RouterLink>

        <RouterLink :to="'/' + currentProject.id + '/options'">
          <PhGear :size="16" color="var(--secondary-text-color)" weight="regular" />
          Options
        </RouterLink>

        <button class="autre">
          <PhDownloadSimple :size="16" color="var(--secondary-text-color)" weight="regular" />
          Exporter
        </button>

        <button class="autre">
          <PhTrash :size="16" color="var(--secondary-text-color)" weight="regular" />
          Corbeille
        </button>
      </nav>
      <hr />
      <nav>
        <div class="title-doc">
          <PhCheckerboard :size="16" color="var(--text-color)" weight="regular" />
          <h3>Documents</h3>
        </div>

        <div class="menu-secondaire">
          <RouterLink
            :to="'/project/' + currentProject.id + '/document/' + document.id"
            v-for="document in currentProject?.documents"
            class="menu-doc"
          >
            <div class="menu-title-doc">
              <PhFiles size="16" color="var(--text-color)" weight="regular" />
              <h4>{{ document.title }}</h4>
            </div>
            <div class="doc-parametre">
              <DocSubMenuComponent :document="document" />
            </div>
          </RouterLink>
        </div>

        <div class="add-nav">
          <button class="btn-doc" @click="createDocument">
            <PhFile size="16" color="var(--text-color)" weight="regular" />
            Nouveau document
          </button>

          <button class="btn-dossier" @click="">
            <PhFolderOpen size="16" color="var(--text-color)" weight="regular" />
            Nouveau dossier
          </button>
        </div>
      </nav>
    </div>
    <div class="footer">
      <hr />

      <nav class="logout">
        <button @click="logout" class="link">
          <PhSignOut :size="16" color="var(--secondary-text-color)" weight="regular" />Se
          déconnecter
        </button>
      </nav>
    </div>
  </section>
  <Transition name="fade">
    <NewDocumentFormComponent
      v-if="afficheModalDocument"
      @hide-form="hideFormDocument"
      :project-id="currentProject?.id"
    />
  </Transition>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth.store'
import {
  PhGear,
  PhHouse,
  PhSignOut,
  PhTextAa,
  PhDownloadSimple,
  PhTrash,
  PhFiles,
  PhCheckerboard,
  PhFile,
  PhFolderOpen,
  PhCaretDoubleLeft,
  PhBook,
  PhList
} from '@phosphor-icons/vue'
import { ref } from 'vue'
import NewDocumentFormComponent from './NewDocumentFormComponent.vue'
import type { Project } from '@/interfaces/project.model'
import DocSubMenuComponent from './DocSubMenuComponent.vue'

const emit = defineEmits(['switchFullScreenMode'])

const authStore = useAuthStore()
const router = useRouter()

const props = defineProps<{ currentProject: Project }>()

/**
 * construire une computed sortedDocuments qui renvoie les documents de props.currentProject.documents triés dans l'ordre que tu veux.
 * Utiliser cette computed pour afficher la liste des documents à la place de la prop.
 */

const afficheModalDocument = ref(false)

function logout() {
  authStore.logOut()
  router.push('/login')
}

function createDocument() {
  afficheModalDocument.value = true
}

function hideFormDocument() {
  afficheModalDocument.value = false
}
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

nav {
  display: flex;
  flex-direction: column;
  padding: 1.7rem 1rem;
}

a,
.autre,
.link {
  font-family: var(--font-title);
  color: var(--secondary-text-color);
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 500;
  display: flex;
  justify-items: center;
  align-items: center;
  gap: 0.6rem;
  padding: 0.3rem 0.5rem;
}

.autre,
.link,
.hide-menu,
.btn-doc-parametre {
  padding: 0.2rem 0.5rem;
  border: none;
  box-shadow: none;
  background-color: transparent;
  align-self: flex-start;
}

h3 {
  font-size: 0.8rem;
  text-transform: uppercase;
}

h4 {
  padding: 0.2rem 0rem;
  font-weight: 400;
}

hr {
  border-bottom: 0.5px solid var(--border-color);
}

p {
  font-size: 0.85rem;
  padding: 0.2rem 0.5rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

button.btn-doc-parametre {
  color: var(--primary-color);
}

.title-doc {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding-left: 0.5rem;
  padding-bottom: 0.5rem;
}

.title-supp {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
}

a.router-link-active {
  background-color: var(--block-background);
  color: var(--text-color);
  border-radius: 3px;
  --secondary-text-color: var(--text-color);
}

a.router-link-active {
  background-color: var(--primary-light);
  color: var(--primary-color);
  --text-color: var(--primary-color);
}

.link {
  font-family: var(--font-text);
  font-weight: 600;
  color: var(--secondary-text-color);
  font-size: 0.8rem;
  justify-self: end;
}
.logout {
  padding: 0.5rem 0 0 0.5rem;
}

.add-nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}

.btn-dossier,
.btn-doc {
  width: 75%;
  padding: 0.7rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
}

.btn-dossier {
  background-color: var(--primary-color);
  color: white;
  border: 0.5px solid var(--primary-color);
  --text-color: white;
}

.project {
  display: flex;
  justify-content: space-between;
  padding: 2rem 1.3rem 0 1.3rem;
  align-items: center;
}

.menu-doc {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-title-doc {
  display: flex;
  gap: 0.6rem;
  align-items: center;
}
</style>
