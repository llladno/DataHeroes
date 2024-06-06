<script setup lang="ts">
import type { CharacterI } from '@/types/type'

const props = defineProps({
  character: {
    type: Object as () => CharacterI
  }
})

enum Status {
  Alive = '#55cc44',
  Dead = '#cc4444',
  unknown = '#b3b3b3'
}
</script>

<template>
  <div class="character__card" v-if="character">
    <img :src="character.image" alt="" />
    <div class="character__card__info">
      <div class="character__card__header">
        <a :href="character.url">{{ character.name }}</a>
        <div class="character__card__header-status">
          <div
            class="circle"
            :style="{ backgroundColor: Status[character.status as keyof typeof Status] }"
          ></div>
          <h4>{{ character.status }} - {{ character.species }}</h4>
        </div>
      </div>
      <div class="character__card__location">
        <p class="character__title">Last known location:</p>
        <a :href="character.location.url">{{ character.location.name }}</a>
      </div>
      <div class="character__card__footer">
        <p class="character__title">First seen in:</p>
        <a v-if="character.origin.name !== 'unknown'" :href="character.origin.url">{{
          character.origin.name
        }}</a>
        <p v-else>{{ character.origin.name }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/variables';

.circle {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #55cc44;
}

.character__card {
  display: flex;
  height: 200px;
  background: variables.$card-background-color;
  border-radius: 10px;
  overflow: hidden;

  & * {
    color: variables.$text-color;
  }

  .character__title {
    color: variables.$secondary-text-color;
  }

  .character__card__info {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .character__card__header {
      a {
        font-size: 1.5rem;
        font-weight: 600;
      }
    }

    .character__card__header-status {
      display: flex;
      align-items: center;
      gap: 10px;

      h4 {
        font-size: 16px;
        font-weight: 600;
      }
    }
  }
}

@media (max-width: 550px) {
  .character__section {
    grid-template-columns: auto;
  }
  .character__card {
    flex-direction: column;
    height: auto;

    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }
  }
}

img {
  width: 220px;
  object-fit: cover;
}

a:hover {
  color: variables.$link-hover-color;
}
</style>
