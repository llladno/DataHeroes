<script setup lang="ts">
const props = defineProps([])
</script>

<template>
  <button :props="props" class="button"><slot></slot></button>
</template>

<style scoped lang="scss">
@use '@/assets/variables';
.button {
  padding: 5px 10px;
  background: none;
  border: 1px solid variables.$link-hover-color;
  border-radius: 5px;
  transition: 0.3s;
  font-weight: 600;
  font-size: 14px;

  &:hover {
    background: variables.$link-hover-color;
    color: variables.$text-color;
  }
}
</style>
