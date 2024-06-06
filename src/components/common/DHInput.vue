<script setup lang="ts">
defineProps({
  modelValue: String
})
</script>

<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    class="input"
  />
</template>

<style scoped lang="scss">
@use '@/assets/variables';

.input {
  padding: 5px 10px;
  border: 1px solid variables.$link-hover-color;
  border-radius: 5px;

  &:focus {
    outline: 2px solid variables.$link-hover-color;
  }
}
</style>
