import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import Api from '@/api/api'

export const useCharacterStore = defineStore('character', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  async function getCharacter() {
    return (await Api.getCharacter()).data
  }

  async function nextCharacter(url: string) {
    return (await Api.nextCharacter(url)).data
  }

  async function getFilteredCharacter(name: string, status: string) {
    return (await Api.filterCharacter(name, status)).data
  }

  return { count, doubleCount, getCharacter, nextCharacter, getFilteredCharacter }
})
