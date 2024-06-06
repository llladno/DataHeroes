<script setup lang="ts">
import { ref } from 'vue'
import DHButton from '@/components/common/DHButton.vue'
import DHInput from '@/components/common/DHInput.vue'

const filter = ref({
  name: '',
  status: ''
})

const emit = defineEmits(['filter'])

function applyFilter() {
  emit('filter', filter.value)
}
</script>

<template>
  <form @submit.prevent="applyFilter">
    <DHInput v-model:modelValue="filter.name" />
    <select v-model="filter.status">
      <option value="" disabled>status</option>
      <option value="alive">Alive</option>
      <option value="dead">Dead</option>
      <option value="unknown">unknown</option>
    </select>
    <DHButton type="submit">Применить</DHButton>
  </form>
</template>

<style scoped lang="scss">
@use '@/assets/variables';

form {
  margin: 20px 0;
  display: flex;
  justify-content: center;
  gap: 15px;

  select {
    border-radius: 5px;
    border: 1px solid variables.$link-hover-color;

    &:focus {
      outline: none;
    }
  }

  @media (max-width: 450px) {
    & {
      flex-direction: column;
      align-items: flex-start;
      margin-left: 20px;
    }
  }
}
</style>
