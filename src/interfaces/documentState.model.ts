import {
  PhCheckCircle,
  PhCircle,
  PhCircleDashed,
  PhDotOutline,
  PhDotsThreeCircle,
  PhHighlighterCircle,
  PhMarkerCircle,
  PhPencilCircle,
  PhPlayCircle
} from '@phosphor-icons/vue'

export const documentState = {
  noState: { name: 'Aucun statut', color: '#53a596', icon: PhDotOutline },
  Brainstorming: { name: 'Brainstorm', color: '#51a5b7', icon: PhMarkerCircle },
  Outlining: { name: 'Outlining', color: '#7c84cc', icon: PhDotsThreeCircle },
  toDo: { name: 'À faire', color: '#b18ec2', icon: PhCircle },
  Drafting: { name: 'En cours', color: '#f18caa', icon: PhCircleDashed },
  Rereading: { name: 'À relire', color: '#e06f68', icon: PhPlayCircle },
  Rewriting: { name: 'À réécrire', color: '#eb8559', icon: PhPencilCircle },
  Editing: { name: 'À éditer', color: '#dbbc15', icon: PhHighlighterCircle },
  Finished: { name: 'Terminé', color: '#79a671', icon: PhCheckCircle }
}
