import type { Document } from './document.model'

export interface Project {
  id: string
  title: string
  createdAt: string
  updatedAt: string
  description: string
  status: string
  documents: Document[]
}
