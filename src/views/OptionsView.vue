<template>
  <div class="block">
    <TitleComponent>
      <PhGear :size="36" color="var(--text-color)" weight="regular" />
      <h1>Options</h1>
    </TitleComponent>
  </div>
</template>

<script setup lang="ts">
import TitleComponent from '../components/TitleComponent.vue'
import { PhGear } from '@phosphor-icons/vue'
</script>
