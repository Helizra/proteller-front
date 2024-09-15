<template>
  <div class="block">
    <TitleComponent>
      <PhHeart :size="36" color="var(--text-color)" weight="regular" />
      <h1>Feeedback</h1>
    </TitleComponent>
  </div>
</template>

<script setup lang="ts">
import TitleComponent from '../components/TitleComponent.vue'
import { PhHeart } from '@phosphor-icons/vue'
</script>
