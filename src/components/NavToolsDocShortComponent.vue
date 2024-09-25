<template>
  <div class="tools-block">
    <div class="tools-containers">
      <PhNotebook :size="20" color="var(--text-color)" weight="regular" />
    </div>

    <div class="tools-containers">
      <PhNotePencil :size="20" color="var(--text-color)" weight="regular" />
    </div>

    <div class="tools-containers">
      <PhListMagnifyingGlass :size="20" color="var(--text-color)" weight="regular" />
    </div>

    <div class="tools-containers">
      <PhBookmark :size="20" color="var(--text-color)" weight="regular" />
    </div>

    <div class="tools-containers">
      <PhCheckSquare :size="20" color="var(--text-color)" weight="regular" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  PhBookmark,
  PhCaretDown,
  PhListMagnifyingGlass,
  PhNotebook,
  PhNotePencil,
  PhCheckSquare
} from '@phosphor-icons/vue'
</script>

<style>
.tools-containers {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0.5em;
}
</style>
