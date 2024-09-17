<template>
  <div class="block">
    <TitleComponent>
      <PhTextAa :size="36" color="var(--text-color)" weight="regular" />
      <h1>Style</h1>
    </TitleComponent>
  </div>
</template>

<script setup lang="ts">
import MenuNavDocComponent from '@/components/MenuNavDocComponent.vue'
import TitleComponent from '@/components/TitleComponent.vue'
import { PhTextAa } from '@phosphor-icons/vue'
</script>
