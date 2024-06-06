<script setup lang="ts">
import { useCharacterStore } from '@/stores/store'
import { onMounted, ref } from 'vue'
import type { CharactersI } from '@/types/type'
import CharacterCard from '@/components/CharacterCard.vue'
import Navigation from '@/components/Navigation.vue'
import Filter from '@/components/Filter.vue'

const store = useCharacterStore()
let characters = ref<CharactersI>()
let page = ref<number | undefined>(1)

onMounted(async () => {
  characters.value = await store.getCharacter()
})

async function nextPage(e: string) {
  characters.value = await store.nextCharacter(e)
  page.value =
    +getPage(characters.value?.info.next) == 0
      ? characters.value?.info.pages
      : +getPage(characters.value?.info.next) - 1
}

async function prevPage(e: string) {
  characters.value = await store.nextCharacter(e)
  page.value = +getPage(characters.value?.info.prev) + 1
}

function getPage(url: string | undefined | null) {
  return url ? url.split('?')[1].split('&')[0].split('=')[1] : 0
}

async function filter({ name, status }: { name: string; status: string }) {
  page.value = 1
  characters.value = await store.getFilteredCharacter(name, status)
}
</script>

<template>
  <Filter @filter="filter" />
  <div class="character__section">
    <CharacterCard
      :key="character.id"
      v-for="character in characters?.results"
      :character="character"
    />
  </div>
  <Navigation :page="page" @prev="prevPage" @next="nextPage" :info="characters?.info" />
</template>

<style scoped>
.character__section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 20px;
}

@media (max-width: 550px) {
  .character__section {
    display: flex;
    flex-direction: column;
  }
}
</style>
