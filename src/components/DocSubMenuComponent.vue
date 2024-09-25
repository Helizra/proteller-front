<template>
  <div class="wrapper-menu-doc">
    <button class="btn-doc-parametre" @click="afficheMenuSubDoc = !afficheMenuSubDoc">
      <component :is="buttonIcon" :class="buttonIconClass" />
    </button>
    <div class="menu-sub-doc" v-if="afficheMenuSubDoc">
      <div class="select-menu-sub-doc">
        <button class="select-line-menu-doc">
          <PhPencilSimple :size="12" color="var(--text-color)" weight="regular" />
          <p>Renommer</p>
        </button>

        <button class="select-line-menu-doc">
          <PhFiles :size="12" color="var(--text-color)" weight="regular" />
          <p>Dupliquer</p>
        </button>

        <button class="select-line-menu-doc">
          <PhTrash :size="12" color="var(--text-color)" weight="regular" />
          <p>Supprimer</p>
        </button>

        <hr />

        <button class="select-line-menu-doc">
          <PhFolderOpen :size="12" color="var(--text-color)" weight="regular" />
          <p>Déplacer vers...</p>
        </button>

        <button class="select-line-menu-doc">
          <PhCopySimple :size="12" color="var(--text-color)" weight="regular" />
          <p>Copier vers...</p>
        </button>

        <hr />

        <button class="select-line-menu-doc" v-for="state in documentState">
          <component :is="state.icon" :style="{ color: state.color }" />{{ state.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Document } from '@/interfaces/document.model'
import {
  PhCheckCircle,
  PhCircle,
  PhCircleDashed,
  PhDotOutline,
  PhDotsThreeCircle,
  PhHighlighterCircle,
  PhMarkerCircle,
  PhPencilCircle,
  PhPlayCircle,
  PhTrash,
  PhFiles,
  PhPencilSimple,
  PhFolderOpen,
  PhCopySimple
} from '@phosphor-icons/vue'
import { computed, ref } from 'vue'
import { documentState } from '@/interfaces/documentState.model'

const afficheMenuSubDoc = ref(false)

const prop = defineProps<{ document: Document }>()

const buttonIcon = computed(() => {
  if (prop.document.state === 'Aucun statut') {
    return PhDotOutline
  }
  if (prop.document.state === 'Brainstorming') {
    return PhMarkerCircle
  }
  if (prop.document.state === 'Outlining') {
    return PhDotsThreeCircle
  }
  if (prop.document.state === 'À faire') {
    return PhCircle
  }
  if (prop.document.state === 'En cours') {
    return PhCircleDashed
  }
  if (prop.document.state === 'À relire') {
    return PhPlayCircle
  }
  if (prop.document.state === 'À réécrire') {
    return PhPencilCircle
  }
  if (prop.document.state === 'À éditer') {
    return PhHighlighterCircle
  }

  if (prop.document.state === 'Terminé') {
    return PhCheckCircle
  }
})

const buttonIconClass = computed(() => {
  if (prop.document.state === 'Aucun statut') {
    return 'color-btn-iconAS'
  }
  if (prop.document.state === 'Brainstorming') {
    return 'color-btn-iconBS'
  }
  if (prop.document.state === 'Outlining') {
    return 'color-btn-iconOL'
  }
  if (prop.document.state === 'À faire') {
    return 'color-btn-iconAF'
  }
  if (prop.document.state === 'En cours') {
    return 'color-btn-iconEC'
  }
  if (prop.document.state === 'À relire') {
    return 'color-btn-iconARL'
  }
  if (prop.document.state === 'À réécrire') {
    return 'color-btn-iconARE'
  }
  if (prop.document.state === 'À éditer') {
    return 'color-btn-iconAE'
  }

  if (prop.document.state === 'Terminé') {
    return 'color-btn-iconT'
  }
})
</script>

<style scoped>
button.btn-doc-parametre,
.select-line-menu-doc {
  border: none;
  box-shadow: none;
  background-color: transparent;
  padding: 0;
  padding-right: 0.3rem;
  color: var(--text-color);
}

.select-line-menu-doc {
  width: 11rem;
  font-weight: 500;
}

button.btn-doc-parametre {
  display: flex;
}

svg {
  height: 1.2rem;
  width: 1.2rem;
}

.color-btn-iconT {
  color: #79a671;
}

.color-btn-iconAS {
  color: #53a596;
}

.color-btn-iconBS {
  color: #51a5b7;
}

.color-btn-iconOL {
  color: #7c84cc;
}

.color-btn-iconAF {
  color: #b18ec2;
}

.color-btn-iconEC {
  color: #f18caa;
}

.color-btn-iconARL {
  color: #e06f68;
}

.color-btn-iconARE {
  color: #eb8559;
}

.color-btn-iconAE {
  color: #dbbc15;
}

.menu-sub-doc {
  background-color: white;
  font-family: var(--font-text);
  font-weight: 400;
  font-size: 0.9rem;
  border: 0.5px solid #22282e;
  border-radius: 0.3rem;
  text-align: center;
  box-shadow: var(--shadow-button);
  cursor: pointer;
  position: absolute;
  /*bottom: min(100vh - 100px, 0.5rem);*/
  top: 0.5rem;
  left: 1.5rem;
  padding: 0.5rem;
}

button:hover {
  color: var(--text-color);
  --text-color: #7960a8;
}

button {
  color: var(--text-color);
  --text-color: #22282e;
}

.select-line-menu-doc {
  display: flex;
  gap: 0.6rem;
  padding: 0.3rem;
}

hr {
  border: 0;
  border-bottom: 0.5px solid #22282e;
  margin: 0.3rem;
}

p {
  color: var(--text-color);
  font-family: var(--font-text);
}

.wrapper-menu-doc {
  position: relative;
}
</style>
