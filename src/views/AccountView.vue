<template>
  <div class="block">
    <TitleComponent>
      <PhUser :size="36" color="var(--text-color)" weight="regular" />
      <h1>Mon compte</h1>
    </TitleComponent>
  </div>
</template>

<script setup lang="ts">
import TitleComponent from '../components/TitleComponent.vue'
import { PhUser } from '@phosphor-icons/vue'
</script>
