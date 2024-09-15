<template>
  <ModalComponent>
    <div class="wrapper1">
      <TitleComponent>
        <PhFile :size="36" color="var(--text-color)" weight="regular" />
        <h1>Nouveau document</h1>
      </TitleComponent>
      <form @submit.prevent="submit">
        <div class="wrapper3">
          <div class="wrapper2">
            <div class="title-project">
              <label for="title">Titre</label>
              <input type="text" name="title" class="title" v-model="title" />
            </div>
            <div class="author-project">
              <div class="icon">
                <PhUser :size="17" color="var(--secondary-text-color)" weight="regular" />
              </div>
              <div class="author-name">
                <p>Auteur</p>
                <h2>{{ authStore.userData?.name }}</h2>
              </div>
            </div>
          </div>
          <div class="wrapper2">
            <div class="draft">
              <div class="icon">
                <PhSpinnerGap :size="17" color="var(--secondary-text-color)" weight="regular" />
              </div>
              <div class="status-draft">
                <label for="status-select">Statut</label>
                <select name="status" id="status-select" v-model="status">
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
            <div class="draft">
              <div class="icon">
                <PhArrowsClockwise
                  :size="17"
                  color="var(--secondary-text-color)"
                  weight="regular"
                />
              </div>
              <div class="state-draft">
                <label for="state-select">État</label>
                <select name="state" id="state-select" v-model="state">
                  <option value="Aucun statut">Aucun statut</option>
                  <option value="Brainstorming">Brainstorming</option>
                  <option value="Outlining">Outlining</option>
                  <option value="À faire">À faire</option>
                  <option value="En cours">En cours</option>
                  <option value="À relire">À relire</option>
                  <option value="À réécrire">À réécrire</option>
                  <option value="À éditer">À éditer</option>
                  <option value="Terminé">Terminé</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="button-classic">
          <button class="button-violet" @click.prevent="closeForm">Annuler</button>
          <button type="submit">Créer</button>
        </div>
      </form>
    </div>
  </ModalComponent>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useProjectStore } from '@/stores/project.store'
import { useAuthStore } from '../stores/auth.store'
import ModalComponent from './ModalComponent.vue'
import TitleComponent from './TitleComponent.vue'
import { PhFile, PhSpinnerGap, PhArrowsClockwise, PhUser } from '@phosphor-icons/vue'

const projectStore = useProjectStore()
const authStore = useAuthStore()
const title = ref('')
const status = ref('Draft 0')
const state = ref('Aucun statut')
const content = ref('')
const emit = defineEmits(['hideForm'])

const props = defineProps(['projectId'])

function closeForm() {
  emit('hideForm')
}

async function submit() {
  await projectStore.createDocument(
    props.projectId,
    title.value,
    status.value,
    state.value,
    content.value
  )
  closeForm()
}
</script>

<style scoped>
.title-project {
  display: flex;
  flex-direction: column;
  border: 0.5px solid var(--border-color);
  border-radius: 0.4rem;
  padding: 0.5rem 1rem;
  margin-bottom: 1.2em;
  width: 50%;
}

label,
p {
  font-size: 0.7rem;
  font-family: var(--font-text);
  color: var(--secondary-text-color);
  font-weight: 700;
}

input {
  border: none;
  font-weight: 900;
  padding: 0;
  font-size: 1.2rem;
}

input:focus {
  outline: none;
  font-weight: 800;
}

.author-project,
.draft {
  display: flex;
  align-items: center;
  gap: 1.6rem;
  border: 0.5px solid var(--border-color);
  border-radius: 0.4rem;
  padding: 0.5rem 1rem;
  margin-bottom: 1.2em;
  width: 50%;
}

.status-draft,
.state-draft {
  display: flex;
  flex-direction: column;
}

select {
  font-size: 1.2rem;
  font-weight: 900;
  border: none;
}

.icon {
  background-color: var(--icon-background-color);
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button-classic {
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  gap: 2rem;
}

.button-violet {
  background-color: var(--primary-light);
}

button {
  width: 11rem;
}

h2 {
  font-size: 1.2rem;
}

.wrapper2 {
  display: flex;
  width: 100%;
  gap: 3rem;
  padding: 0rem 2rem;
}

.wrapper1 {
  display: flex;
  flex-direction: column;
  height: 100%;
}

form {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
}
</style>
