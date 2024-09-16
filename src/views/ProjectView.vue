<template>
  <div class="block">
    <TitleComponent>
      <h1>{{ currentProject?.title }}</h1>
    </TitleComponent>

    <div class="top-info">
      <div class="description">
        {{ currentProject?.description }}
      </div>

      <div class="box-wrapp">
        <div class="wrapper2">
          <div class="form">
            <div class="icon">
              <PhSpinnerGap :size="17" color="var(--secondary-text-color)" weight="regular" />
            </div>
            <div class="text-nb">
              <h3 class="label">Statut</h3>
              <h4>{{ currentProject?.status }}</h4>
            </div>
          </div>

          <div class="form">
            <div class="icon">
              <PhCalendar :size="17" color="var(--secondary-text-color)" weight="regular" />
            </div>
            <div class="text-nb">
              <h3 class="label">Commencé le</h3>
              <h4>{{ useDateFormat(currentProject?.createdAt, 'DD MMM YYYY') }}</h4>
            </div>
          </div>
        </div>

        <div class="wrapper2">
          <div class="form">
            <div class="icon">
              <PhFiles :size="17" color="var(--secondary-text-color)" weight="regular" />
            </div>
            <div class="text-nb">
              <h3 class="label">Documents</h3>
              <h4>{{ currentProject?.documents.length }}</h4>
            </div>
          </div>

          <div class="form">
            <div class="icon">
              <PhPencilLine :size="17" color="var(--secondary-text-color)" weight="regular" />
            </div>
            <div class="text-nb">
              <h3 class="label">Mots</h3>
              <h4>Blank</h4>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="words-info">
      <div class="this-week">
        <div class="this-week-title">
          <PhCalendar :size="22" color="var(--primary-color)" weight="regular" />
          <h5>Cette semaine</h5>
        </div>
        <hr />
        <div class="this-week-stats">
          <div class="table-words"></div>
          <div class="words-stats">
            <div class="form">
              <div class="icon">
                <PhPencilLine :size="17" color="var(--secondary-text-color)" weight="regular" />
              </div>
              <div class="text-nb">
                <h3 class="label">Nombre de mots</h3>
                <h4>Blank</h4>
              </div>
            </div>
            <div class="form">
              <div class="icon">
                <PhCalculator :size="17" color="var(--secondary-text-color)" weight="regular" />
              </div>
              <div class="text-nb">
                <h3 class="label">Moyenne par jour</h3>
                <h4>Blank</h4>
              </div>
            </div>
            <div class="form">
              <div class="icon"></div>
              <div class="text-nb">
                <h3 class="label">Objectif</h3>
                <h4>Blank</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="graphic"></div>
    </div>

    <div class="table-doc">
      <table>
        <thead>
          <tr>
            <th scope="col">Checkbox</th>
            <th scope="col">Titre</th>
            <th scope="col">Nombre de mots</th>
            <th scope="col">État</th>
            <th scope="col">Statut</th>
            <th scope="col">Auteur</th>
            <th scope="col">Modifié</th>
            <th scope="col">Para Doc</th>
            <th scope="col">
              <PhSliders :size="16" color="var(--secondary-text-color)" weight="regular" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="document in currentProject?.documents">
            <td><input class="checkbox" type="checkbox" /></td>
            <td class="doc-wrapp">
              <PhFileText :size="16" color="var(--text-color)" weight="regular" />
              {{ document.title }}
            </td>
            <td>Blank</td>
            <td>{{ document.state }}</td>
            <td>{{ document.status }}</td>
            <td>{{ authStore.userData?.name }}</td>
            <td>{{ useDateFormat(document.updatedAt, 'DD MMM YYYY') }}</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
        <caption>
          <p v-if="currentProject?.documents.length === 0">Vous n'avez pas encore de document...</p>
        </caption>
      </table>
    </div>

    <hr />
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
import { useDateFormat, useNow } from '@vueuse/core'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import {
  PhCalculator,
  PhCalendar,
  PhFile,
  PhFiles,
  PhFileText,
  PhPencilLine,
  PhSliders,
  PhSpinnerGap
} from '@phosphor-icons/vue'
import NewDocumentFormComponent from '@/components/NewDocumentFormComponent.vue'
import { useAuthStore } from '../stores/auth.store'

const authStore = useAuthStore()
const route = useRoute()
const projectStore = useProjectStore()
const afficheModalDocument = ref(false)
const afficheCaptionTable = ref(true)

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

<style scoped>
h4 {
  font-size: 1.2rem;
}

.wrapper2 {
  display: flex;
  width: 100%;
  gap: 2rem;
  padding: 0rem 0rem 0rem 2rem;
}

.description {
  color: var(--primary-color);
  background-color: var(--primary-mediumlight);
  border-radius: 0.4rem;
  padding: 1rem 1.5rem;
  width: 50%;
  font-family: var(--font-text);
  font-size: 0.9rem;
}

.top-info {
  display: flex;
  padding: 0.5rem;
  margin: 0.5rem;
}

.box-wrapp {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50%;
}

.form {
  align-items: center;
}

.btn-add {
  margin: 0.5rem;
}

hr {
  border: 0;
  border-bottom: 0.5px solid var(--border-color);
  margin-bottom: 1.3rem;
  margin-top: 0.5rem;
}

.words-info {
  display: flex;
  padding: 0.5rem;
  margin: 2rem 0.5rem;
}

.this-week,
.graphic {
  width: 50%;
}

.this-week-title {
  display: flex;
  align-items: center;
  gap: 1rem;
}

h5 {
  color: var(--primary-color);
}

.this-week-stats {
  display: flex;
}

.table-words,
.words-stats {
  width: 50%;
}

.words-stats {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

table {
  width: 100%;
  text-align: center;
  font-family: var(--font-text);
  font-size: 0.8rem;
  border-spacing: 0px;
  color: var(--secondary-text-color);
}

th {
  padding: 1rem;
  border-bottom: 0.5px solid var(--border-color);
}
td {
  padding: 1rem;
  color: var(--text-color);
}

tbody tr:hover {
  background-color: var(--primary-mediumlight);
  --text-color: var(--primary-color);
}

.doc-wrapp {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

caption {
  caption-side: bottom;
  padding: 1rem 0 0.5rem 0;
}

caption p {
  color: var(--primary-color);
  opacity: 0.4;
  font-style: italic;
}
</style>
