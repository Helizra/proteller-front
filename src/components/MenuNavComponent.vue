<template>
  <section>
    <div class="menu">
      <div class="user">
        <h2>{{ authStore.userData?.name }}</h2>

        <div class="dark-mode">
          <PhSun v-if="!darkMode" :size="18" color="var(--text-color)" weight="regular" />
          <PhMoon v-else :size="18" color="var(--text-color)" weight="regular" />
          <label class="switch">
            <input type="checkbox" v-model="darkMode" />
            <span class="slider round"></span>
          </label>
        </div>
      </div>

      <nav>
        <RouterLink to="/">
          <PhHouse :size="20" color="var(--secondary-text-color)" weight="regular" />
          Home
        </RouterLink>
        <RouterLink to="/account">
          <PhUser :size="20" color="var(--secondary-text-color)" weight="regular" />
          Mon compte
        </RouterLink>
        <button class="autre">
          <PhFileMagnifyingGlass :size="20" color="var(--secondary-text-color)" weight="regular" />
          Ouverture rapide
        </button>
        <RouterLink to="/options">
          <PhGear :size="20" color="var(--secondary-text-color)" weight="regular" />
          Options
        </RouterLink>
      </nav>
      <hr />
      <nav>
        <div class="project">
          <div class="title-proj">
            <PhBooks :size="16" color="var(--text-color)" weight="regular" />
            <h3>Projets</h3>
          </div>
          <button class="add-project" @click="createProject">+</button>
        </div>
        <div class="menu-secondaire">
          <RouterLink :to="'/project/' + project.id" v-for="project in projectStore.userProjects">
            <PhBook size="16" color="var(--text-color)" weight="regular" />
            <h4>{{ project.title }}</h4>
          </RouterLink>
        </div>
      </nav>
      <hr />
      <nav>
        <div class="title-supp">
          <PhButterfly :size="16" color="var(--text-color)" weight="regular" />
          <h3>Support</h3>
        </div>
        <div class="menu-secondaire">
          <RouterLink to="/feedback">
            <PhHeart :size="16" color="var(--text-color)" weight="regular" />
            <h4>Feeedback</h4>
          </RouterLink>

          <RouterLink to="/help">
            <PhInfo :size="16" color="var(--text-color)" weight="regular" />
            <h4>Help</h4>
          </RouterLink>
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
    <NewProjectFormComponent v-if="afficheModalProject" @hide-form="hideFormProject" />
  </Transition>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth.store'
import {
  PhBooks,
  PhButterfly,
  PhFileMagnifyingGlass,
  PhGear,
  PhHouse,
  PhUser,
  PhHeart,
  PhInfo,
  PhSignOut,
  PhSun,
  PhMoon,
  PhBook
} from '@phosphor-icons/vue'
import { ref } from 'vue'
import NewProjectFormComponent from './NewProjectFormComponent.vue'
import { useProjectStore } from '@/stores/project.store'

const authStore = useAuthStore()
const projectStore = useProjectStore()
const router = useRouter()
const darkMode = ref(false)
const afficheModalProject = ref(false)

function logout() {
  authStore.logOut()
  router.push('/login')
}

function createProject() {
  afficheModalProject.value = true
}

function hideFormProject() {
  afficheModalProject.value = false
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
.add-project,
.link {
  font-family: var(--font-title);
  color: var(--secondary-text-color);
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 600;
  display: flex;
  justify-items: center;
  align-items: center;
  gap: 0.6rem;
  padding: 0.2rem 0.5rem;
}

.autre,
.add-project,
.link {
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
  border: 0;
  border-bottom: 0.5px solid var(--border-color);
  margin-left: 1.2rem;
  margin-right: 1.2rem;
}

p {
  font-size: 0.85rem;
  padding: 0.2rem 0.5rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.title-proj {
  display: flex;
  align-items: center;
  gap: 0.6rem;
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
.add-project {
  color: var(--text-color);
  font-weight: 700;
}

.project {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 2.7rem;
  height: 1.3rem;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--link-active-nav);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: '';
  height: 1.3rem;
  width: 1.3rem;
  background-color: white;
  border: 0.5px solid var(--text-color);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #eceff2;
}

input:focus + .slider {
  box-shadow: 0 0 1px #eceff2;
}

input:checked + .slider:before {
  -webkit-transform: translateX(1.4rem);
  -ms-transform: translateX(1.4rem);
  transform: translateX(1.4rem);
}

/* Rounded sliders */
.slider.round {
  border-radius: 2.3rem;
}

.slider.round:before {
  border-radius: 50%;
}

.user {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1.3rem 0 1.3rem;
}

.dark-mode {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}
</style>
