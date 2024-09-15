<template>
  <ModalComponent>
    <div class="wrapper1">
      <TitleComponent>
        <PhBook :size="36" color="var(--text-color)" weight="regular" />
        <h1>Nouveau project</h1>
      </TitleComponent>
      <form @submit.prevent="submit">
        <div class="wrapper2">
          <div class="title-project">
            <label for="title">Titre</label>
            <input type="text" name="title" class="title" v-model="title" />
          </div>
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
        </div>
        <div class="description">
          <textarea
            type="text"
            class="description-box"
            name="description"
            placeholder="Description"
            v-model="description"
          />
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
import { useProjectStore } from '@/stores/project.store'
import ModalComponent from './ModalComponent.vue'
import TitleComponent from './TitleComponent.vue'
import { PhBook, PhSpinnerGap } from '@phosphor-icons/vue'
import { ref } from 'vue'

const projectStore = useProjectStore()
const title = ref('')
const description = ref('')
const status = ref('Draft 0')

const emit = defineEmits(['hideForm'])
function closeForm() {
  emit('hideForm')
}

async function submit() {
  await projectStore.createProject(title.value, description.value, status.value)
  closeForm()
}
</script>

<style scoped>
.add-project {
  color: var(--text-color);
  font-weight: 700;
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

.wrapper2 {
  display: flex;
  width: 100%;
  gap: 3rem;
  padding: 0rem 2rem;
}

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

.status-draft {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 0.7rem;
  font-family: var(--font-text);
  color: var(--secondary-text-color);
  font-weight: 700;
}

select {
  font-size: 1.2rem;
  font-weight: 900;
  border: none;
}

.title-project {
  display: flex;
  flex-direction: column;
  border: 0.5px solid var(--border-color);
  border-radius: 0.4rem;
  padding: 0.5rem 1rem;
  margin-bottom: 1.2em;
  width: 50%;
}

textarea,
input {
  border: none;
  font-weight: 900;
  padding: 0;
  font-size: 1.2rem;
}

textarea:focus,
input:focus {
  outline: none;
  font-weight: 800;
}

textarea {
  height: 8rem;
  resize: none;
  margin-bottom: 1.2em;
}

.description {
  padding: 1rem 2rem;
}

.description-box {
  width: 100%;
  color: var(--primary-color);
  background-color: var(--primary-mediumlight);
  border-radius: 0.4rem;
  padding: 1rem 1.5rem;
}

textarea.description-box {
  font-family: var(--font-text);
  font-weight: 400;
  font-size: 0.9rem;
  color: var(--primary-color);
}

::placeholder {
  color: var(--placeholder-color);
}

.wrapper1 {
  display: flex;
  flex-direction: column;
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

form {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
}
</style>
