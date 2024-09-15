<template>
  <div class="block">
    <TitleComponent>
      <PhInfo :size="36" color="var(--text-color)" weight="regular" />
      <h1>Help</h1>
    </TitleComponent>
  </div>
</template>

<script setup lang="ts">
import TitleComponent from '../components/TitleComponent.vue'
import { PhInfo } from '@phosphor-icons/vue'
</script>
