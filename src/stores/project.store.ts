import type { Project } from '@/interfaces/project.model'
import axios from 'axios'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useAuthStore } from './auth.store'
import { useRouter } from 'vue-router'
import type { Document } from '@/interfaces/document.model'

export const useProjectStore = defineStore('projects', () => {
  const userProjects = ref<Project[]>([])
  const authStore = useAuthStore()
  const router = useRouter()
  const sortedProjects = computed(() => {
    return userProjects.value.sort(
      (a: Project, b: Project) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    )
  })

  async function createProject(title: string, description: string, status: string) {
    const newProject = await axios.post<Project>(
      'http://localhost:3000/projects',
      {
        title: title,
        description: description,
        status: status
      },
      {
        headers: { Authorization: 'Bearer ' + authStore.accessToken }
      }
    )
    console.log(newProject)
    userProjects.value.unshift(newProject.data)
    router.push('/project/' + newProject.data.id)
  }

  async function loadProjects() {
    const afficheProjects = await axios.get<Project[]>('http://localhost:3000/projects', {
      headers: { Authorization: 'Bearer ' + authStore.accessToken }
    })
    userProjects.value = afficheProjects.data
  }

  async function createDocument(
    projectid: string,
    title: string,
    status: string,
    state: string,
    content: string
  ) {
    const newDocument = await axios.post(
      'http://localhost:3000/documents',
      {
        title: title,
        status: status,
        state: state,
        content: content,
        projectId: projectid
      },
      {
        headers: { Authorization: 'Bearer ' + authStore.accessToken }
      }
    )
    userProjects.value.find((project) => project.id === projectid)?.documents.push(newDocument.data)
  }

  async function updateDocument(document: Document, projectId: string) {
    const body = {
      title: document.title,
      content: document.content,
      status: document.status,
      state: document.state
    }
    await axios.patch('http://localhost:3000/documents/' + document.id, body, {
      headers: { Authorization: 'Bearer ' + authStore.accessToken }
    })
    loadProjects()
  }

  return {
    loadProjects,
    createProject,
    userProjects,
    createDocument,
    sortedProjects,
    updateDocument
  }
})
