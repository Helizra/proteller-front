<template>
  <DashboardComponent :project-id="route.params.projectid" />
</template>

<script setup lang="ts">
import DashboardComponent from '@/components/DashboardComponent.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
