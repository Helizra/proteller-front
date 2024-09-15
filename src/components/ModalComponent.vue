<template>
  <div class="modal">
    <div class="popup">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(97 94 100 / 35%);
  backdrop-filter: blur(1.5px);
}

.popup {
  background-color: white;
  height: 30rem;
  width: 53rem;
  border-radius: 8px;
  padding: 2.5rem 2rem;
}
</style>
