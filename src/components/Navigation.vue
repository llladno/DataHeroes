<script setup lang="ts">
import type { Info } from '@/types/type'
import DHButton from '@/components/common/DHButton.vue'

defineProps({
  info: {
    type: Object as () => Info
  },
  page: Number
})

defineEmits(['prev', 'next'])
</script>

<template>
  <div v-if="page" class="navigation">
    <DHButton @click="$emit('prev', info?.prev)" :disabled="page <= 1">Назад</DHButton>
    <span> {{ page }}</span>
    <DHButton @click="$emit('next', info?.next)" :disabled="page >= info?.pages">Вперёд</DHButton>
  </div>
</template>

<style scoped>
.navigation {
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
}
</style>
