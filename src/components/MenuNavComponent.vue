<template>
  <section>
    <h2>{{ authStore.userData.name }}</h2>
    <nav>
      <RouterLink to="/">
        <PhHouse :size="20" color="var(--secondary-text-color)" weight="regular" />
        Dashbooard
      </RouterLink>
      <RouterLink to="/account">
        <PhUser :size="20" color="var(--secondary-text-color)" weight="regular" />
        Mon compte
      </RouterLink>
      <button>
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
      <div class="title">
        <PhBooks :size="16" color="var(--text-color)" weight="regular" />
        <h3>Projets</h3>
      </div>
    </nav>
    <hr />
    <nav>
      <div class="title">
        <PhButterfly :size="16" color="var(--text-color)" weight="regular" />
        <h3>Support</h3>
      </div>
    </nav>
  </section>
</template>

<script setup lang="ts">
import { useAuthStore } from '../stores/auth.store'
import {
  PhBooks,
  PhButterfly,
  PhFileMagnifyingGlass,
  PhGear,
  PhHouse,
  PhUser
} from '@phosphor-icons/vue'

const authStore = useAuthStore()
</script>

<style scoped>
nav {
  display: flex;
  flex-direction: column;
  background-color: var(--site-background);
  padding: 1.7rem 1rem;
}

a,
button {
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

button {
  padding: 0.2rem 0.5rem;
  border: none;
  box-shadow: none;
  background-color: transparent;
  align-self: flex-start;
}

h2 {
  padding: 2rem 0 0 1.3rem;
}

h3 {
  font-size: 0.8rem;
  text-transform: uppercase;
}

hr {
  border: 0;
  border-bottom: 0.5px solid var(--border-color);
  margin-left: 1.2rem;
  margin-right: 1.2rem;
}

.title {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.router-link-active {
  background-color: var(--border-color-site);
  color: var(--block-background);
  border-radius: 4px;
  --secondary-text-color: var(--block-background);
}
</style>
