<template>
  <div class="title">
    <slot />
  </div>
</template>

<style scoped>
.title {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.6rem;
  border-bottom: 0.5px solid var(--border-color);
  padding-bottom: 1.2rem;
  padding-left: 3rem;
  margin-bottom: 2.5rem;
}
</style>
