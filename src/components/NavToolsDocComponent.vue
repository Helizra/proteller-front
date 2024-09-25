<template>
  <div class="tools-block">
    <div class="tools-containers">
      <div class="tools-title">
        <PhNotebook :size="20" color="var(--text-color)" weight="regular" />
        <h3>Résumé</h3>
      </div>
      <PhCaretDown :size="10" color="var(--text-color)" weight="fill" />
    </div>

    <div class="tools-containers">
      <div class="tools-title">
        <PhNotePencil :size="20" color="var(--text-color)" weight="regular" />
        <h3>Notes</h3>
      </div>
      <PhCaretDown :size="10" color="var(--text-color)" weight="fill" />
    </div>

    <div class="tools-containers">
      <div class="tools-title">
        <PhListMagnifyingGlass :size="20" color="var(--text-color)" weight="regular" />
        <h3>Rechercher</h3>
      </div>
      <PhCaretDown :size="10" color="var(--text-color)" weight="fill" />
    </div>

    <div class="tools-containers">
      <div class="tools-title">
        <PhBookmark :size="20" color="var(--text-color)" weight="regular" />
        <h3>Dictionnaire</h3>
      </div>
      <PhCaretDown :size="10" color="var(--text-color)" weight="fill" />
    </div>

    <div class="tools-containers">
      <div class="tools-title">
        <PhCheckSquare :size="20" color="var(--text-color)" weight="regular" />
        <h3>Tâches</h3>
      </div>
      <PhCaretDown :size="10" color="var(--text-color)" weight="fill" />
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
.tools-block {
  border: 0.5px solid var(--text-color);
  border-radius: 6px;
}

h3 {
  font-size: 0.85rem;
  font-weight: 600;
}

.tools-title {
  display: flex;
  gap: 0.6rem;
  align-items: center;
}

.tools-containers {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1em;
}
</style>
